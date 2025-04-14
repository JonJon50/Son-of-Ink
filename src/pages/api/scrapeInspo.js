export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { style, theme, placement } = req.body;

    try {
        const redditRes = await fetch('https://www.reddit.com/r/tattoos.json?limit=50');
        const redditData = await redditRes.json();
        const redditPosts = redditData.data.children;

        const redditResults = redditPosts
            .map((post) => {
                const p = post.data;
                const title = p.title.toLowerCase();
                const hasImage = p.preview && p.preview.images?.[0]?.source?.url;

                if (!hasImage) return null;

                let matchScore = 0;
                if (title.includes(style.toLowerCase())) matchScore += 1;
                if (title.includes(theme.toLowerCase())) matchScore += 1;
                if (title.includes(placement.toLowerCase())) matchScore += 1;

                return {
                    image: p.preview.images[0].source.url.replace(/&amp;/g, '&'),
                    caption: p.title,
                    score: matchScore,
                    source: 'Reddit',
                };
            })
            .filter(Boolean)
            .sort((a, b) => b.score - a.score)
            .filter((item) => item.score > 0);

        let igResults = [];
        try {
            const IG_URL = process.env.INSTAGRAM_PROXY_URL || 'https://pikky-api.vercel.app/api/instagram/theronissac';

            const igRes = await fetch(IG_URL);
            const igText = await igRes.text();
            const igData = JSON.parse(igText);

            igResults = (igData?.data || [])
                .map((ig) => {
                    const caption = ig.caption?.toLowerCase() || '';
                    const hashtags = caption.match(/#[a-z0-9_]+/g) || []; // extract hashtags only

                    let matchScore = 0;
                    const allQueries = [style, theme, placement].map((q) => q.toLowerCase());

                    allQueries.forEach((query) => {
                        if (query && (caption.includes(query) || hashtags.includes(`#${query}`))) {
                            matchScore += 1;
                        }
                    });


                    return {
                        image: ig.image,
                        caption: `Instagram by theronissac: ${ig.caption || 'Tattoo inspiration'}`,
                        score: matchScore,
                        source: 'Instagram',
                    };
                })
                .filter((item) => item.image && (item.score > 0 || process.env.ALLOW_IG_ALL === 'true'));

        } catch (igError) {
            console.warn('⚠️ Instagram fetch failed:', igError.message);
        }

        const combined = [...redditResults, ...igResults]
            .sort((a, b) => b.score - a.score)
            .slice(0, 12);

        if (combined.length === 0) {
            return res.status(200).json({
                results: [
                    {
                        image: '/Assets/tattoo1.jpg',
                        caption: 'No Reddit or Instagram matches found — showing backup idea!',
                    },
                ],
            });
        }

        res.status(200).json({ results: combined });
    } catch (err) {
        console.error('❌ API Error:', err.message);
        res.status(500).json({ error: 'Failed to fetch tattoo inspiration data' });
    }
}
