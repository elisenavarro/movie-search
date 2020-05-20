import { fetchMovies, updateSearch, insertMovies } from './movies';

// SEARCH FORM
const form = document.querySelector('#search-form');

form.addEventListener('submit', updateSearch);
