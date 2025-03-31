export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();

    const { style, theme, placement } = req.body;

    // Fake data (in real version, this will scrape Pinterest or Reddit)
    const dummyData = [
        {
            image: '/Assets/tattoo1.jpg',
            caption: `A ${style} tattoo with a ${theme} vibe for the ${placement}.`,
        },
        {
            image: '/Assets/tattoo2.jpg',
            caption: `Inspired by ${theme}, perfect on your ${placement} in ${style} style.`,
        },
    ];

    res.status(200).json({ results: dummyData });
}
