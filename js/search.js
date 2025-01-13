// search.js
import { fetchAnime } from './api.js';

async function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('searchInput').value;
  try {
    const data = await fetchAnime(query);
    displayResults(data);
  } catch (error) {
    console.error(error);
  }
}

function displayResults(data) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';
  data.data.forEach(anime => {
    const animeCard = document.createElement('div');
    animeCard.className = 'anime-card';
    animeCard.innerHTML = `
      <h3>${anime.title}</h3>
      <img src="${anime.image_url}" alt="${anime.title}">
      <p>${anime.synopsis}</p>
    `;
    resultsDiv.appendChild(animeCard);
  });
}

export { handleSearch };
