export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { style, theme, placement } = req.body;

    try {
        const redditRes = await fetch('https://www.reddit.com/r/tattoos.json?limit=50');
        const data = await redditRes.json();
        const posts = data.data.children;

        const filteredResults = posts
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
                };
            })
            .filter(Boolean)
            .sort((a, b) => b.score - a.score)
            .filter((item) => item.score > 0);

        if (filteredResults.length === 0) {
            return res.status(200).json({
                results: [
                    {
                        image: '/Assets/tattoo1.jpg',
                        caption: 'No Reddit matches found — showing backup idea!',
                    },
                ],
            });
        }

        res.status(200).json({ results: filteredResults.slice(0, 12) }); 
    } catch (err) {
        console.error('API Error:', err.message);
        res.status(500).json({ error: 'Failed to fetch Reddit posts' });
    }
}
