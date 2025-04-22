// pages/api/proxy-image.js
import axios from 'axios';

export default async function handler(req, res) {
    const { url } = req.query;

    if (!url) return res.status(400).send('Missing URL');

    try {
        const imgRes = await axios.get(url, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent':
                    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            },
        });

        res.setHeader('Content-Type', imgRes.headers['content-type']);
        res.send(imgRes.data);
    } catch (error) {
        console.error('Proxy image fetch failed:', error.message);
        res.status(500).send('Image fetch failed');
    }
}
