// api.js
const apiKey = 'kEy89MaStEr16'; // Replace with actual API key

async function fetchAnime(query, page = 1) {
  const url = `https://api.anidb.net/v2/anime?q=${query}&limit=10&offset=${(page - 1) * 10}`;
  const res = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${apiKey}`
    }
  });
  if (!res.ok) throw new Error('Failed to fetch anime data');
  return await res.json();
}

export { fetchAnime };
