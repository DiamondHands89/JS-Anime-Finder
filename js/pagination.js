// pagination.js
import { fetchAnime } from './api.js';
import { displayResults } from './search.js';

async function handlePagination(query, page) {
  try {
    const data = await fetchAnime(query, page);
    displayResults(data);
    updatePagination(query, page, data.pagination);
  } catch (error) {
    console.error(error);
  }
}

function updatePagination(query, currentPage, pagination) {
  const paginationDiv = document.getElementById('pagination');
  paginationDiv.innerHTML = '';
  for (let i = 1; i <= pagination.last_visible_page; i++) {
    const pageButton = document.createElement('button');
    pageButton.className = 'page-button';
    pageButton.textContent = i;
    if (i === currentPage) pageButton.disabled = true;
    pageButton.addEventListener('click', () => handlePagination(query, i));
    paginationDiv.appendChild(pageButton);
  }
}

export { handlePagination };
