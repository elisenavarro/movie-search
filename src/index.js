import { fetchMovies, updateSearch } from './movies';

// SEARCH FORM
const form = document.querySelector('#search-form');

form.addEventListener('submit', updateSearch);
