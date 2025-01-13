import { handleSearch } from "./search";
import { handlePagination } from "./pagination";

document.getElementById('searchBtn').addEventListener('click', handleSearch);
document.getElementById('searchInput').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') handleSearch(event);
});