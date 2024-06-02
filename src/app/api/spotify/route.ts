import type { NextApiRequest, NextApiResponse } from 'next';

const getCurrentlyPlaying = async (req: NextApiRequest, res: NextApiResponse) => {
  const tokenResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/spotify-token`);
  const tokenData = await tokenResponse.json();
  const accessToken = tokenData.access_token;

  const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const currentlyPlaying = await response.json();
  res.status(200).json(currentlyPlaying);
};

export default getCurrentlyPlaying;