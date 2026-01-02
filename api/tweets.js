// Vercel serverless function to fetch tweets from X API
export default async function handler(req, res) {
  // Enable CORS for your domain
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  try {
    const bearerToken = process.env.TWITTER_BEARER_TOKEN;
    const userId = process.env.TWITTER_USER_ID; // Your user ID

    if (!bearerToken || !userId) {
      throw new Error('Missing X API credentials');
    }

    // Fetch recent tweets from X API v2
    const response = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?` +
      `max_results=100&` +
      `tweet.fields=created_at,text,author_id&` +
      `exclude=retweets,replies`, // Only original tweets
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          'User-Agent': 'scwlkr-website/1.0'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`X API error: ${response.status}`);
    }

    const data = await response.json();

    // Return tweet data
    res.status(200).json({
      success: true,
      tweets: data.data || [],
      count: data.meta?.result_count || 0
    });

  } catch (error) {
    console.error('Error fetching tweets:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
}
