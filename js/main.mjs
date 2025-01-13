// main.mjs
import { handleSearch } from './search.mjs';
import { handlePagination } from './pagination.mjs';

document.getElementById('searchBtn').addEventListener('click', handleSearch);
document.getElementById('searchInput').addEventListener('keypress', (event) => {
  if (event.key === 'Enter') handleSearch(event);
});
