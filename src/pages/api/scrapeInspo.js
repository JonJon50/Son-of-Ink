import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { style, theme, placement } = req.body;

  try {
    // Fetch Reddit posts
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

    // Fetch Instagram posts
    let igResults = [];
    try {
      const igResponse = await axios.get(
        'https://i.instagram.com/api/v1/users/web_profile_info/',
        {
          params: { username: 'theronissac' },
          headers: {
            'User-Agent':
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36',
            'x-ig-app-id': '936619743392459',
          },
        }
      );

      const posts = igResponse.data.data.user.edge_owner_to_timeline_media.edges;

      igResults = posts.map(({ node }) => {
        const caption = node.edge_media_to_caption.edges[0]?.node.text.toLowerCase() || '';
        const image = node.display_url;

        let matchScore = 0;
        const allQueries = [style, theme, placement].map((q) => q.toLowerCase());

        allQueries.forEach((query) => {
          if (caption.includes(query)) {
            matchScore += 1;
          }
        });

        return {
          image,
          caption: `Instagram: ${caption || 'Tattoo inspiration'}`,
          score: matchScore,
          source: 'Instagram',
        };
      });
    } catch (igError) {
      console.warn('⚠️ Instagram scraping failed:', igError.message);
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
