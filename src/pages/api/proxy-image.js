// pages/api/proxy-image.js
import axios from 'axios';
import net from 'net';

const ALLOWED_IMAGE_HOSTNAMES = new Set([
    'preview.redd.it',
    'external-preview.redd.it',
    'i.redd.it',
    'scontent.cdninstagram.com',
]);

const MAX_IMAGE_SIZE = 10 * 1024 * 1024;
const REQUEST_TIMEOUT_MS = 5000;
const GENERIC_ERROR = 'Unable to fetch image';

const isPrivateIPv4 = (hostname) => {
    const parts = hostname.split('.').map(Number);
    if (parts.length !== 4 || parts.some((part) => Number.isNaN(part))) return false;

    const [first, second] = parts;
    return (
        first === 10 ||
        first === 127 ||
        (first === 172 && second >= 16 && second <= 31) ||
        (first === 192 && second === 168) ||
        (first === 169 && second === 254) ||
        (first === 100 && second >= 64 && second <= 127) ||
        (first === 0 && second === 0 && parts[2] === 0 && parts[3] === 0)
    );
};

const isPrivateIPv6 = (hostname) => {
    const normalized = hostname.replace(/^\[|\]$/g, '').toLowerCase();
    return (
        normalized === '::1' ||
        normalized === '::' ||
        normalized.startsWith('fc') ||
        normalized.startsWith('fd') ||
        normalized.startsWith('fe80:') ||
        normalized.startsWith('fe90:') ||
        normalized.startsWith('fea0:') ||
        normalized.startsWith('feb0:')
    );
};

const isBlockedHost = (hostname) => {
    const normalized = hostname.toLowerCase();
    const ipType = net.isIP(normalized);

    if (normalized === 'localhost' || normalized.endsWith('.localhost')) return true;
    if (normalized === 'metadata.google.internal') return true;
    if (normalized === '169.254.169.254') return true;
    if (ipType === 4) return isPrivateIPv4(normalized);
    if (ipType === 6) return isPrivateIPv6(normalized);

    return false;
};

const validateImageUrl = (rawUrl) => {
    let parsedUrl;

    try {
        parsedUrl = new URL(rawUrl);
    } catch {
        return null;
    }

    if (parsedUrl.protocol !== 'https:') return null;
    if (parsedUrl.username || parsedUrl.password) return null;
    if (isBlockedHost(parsedUrl.hostname)) return null;
    if (!ALLOWED_IMAGE_HOSTNAMES.has(parsedUrl.hostname.toLowerCase())) return null;

    return parsedUrl.toString();
};

export default async function handler(req, res) {
    const { url } = req.query;
    const requestedUrl = Array.isArray(url) ? url[0] : url;

    if (!requestedUrl) return res.status(400).send(GENERIC_ERROR);

    const validatedUrl = validateImageUrl(requestedUrl);
    if (!validatedUrl) return res.status(400).send(GENERIC_ERROR);

    try {
        const imgRes = await axios.get(validatedUrl, {
            responseType: 'arraybuffer',
            timeout: REQUEST_TIMEOUT_MS,
            maxContentLength: MAX_IMAGE_SIZE,
            maxBodyLength: MAX_IMAGE_SIZE,
            maxRedirects: 0,
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            },
        });

        const contentType = String(imgRes.headers['content-type'] || '').toLowerCase();
        if (!contentType.startsWith('image/')) {
            return res.status(400).send(GENERIC_ERROR);
        }

        if (imgRes.data.byteLength > MAX_IMAGE_SIZE) {
            return res.status(413).send(GENERIC_ERROR);
        }

        res.setHeader('Content-Type', contentType.split(';')[0]);
        res.setHeader('Cache-Control', 'public, max-age=86400');
        res.send(imgRes.data);
    } catch (error) {
        console.error('Proxy image fetch failed.');
        res.status(502).send(GENERIC_ERROR);
    }
}
