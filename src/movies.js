const list = document.querySelector('#results');

// Parse through returned data from GET request
const insertMovies = (data) => {
  data.results.forEach((result) => {
    // Select the search input value 'data' call 'result' object
    const movie =
      `<li class="border-bottom p-4">
      <img src="https://image.tmdb.org/t/p/w300_and_h450_bestv2${result.poster_path}" alt="" class="rounded"/>
      <h3 class="m-2 font-weight-bold">${result.title}</h3>
      <button type="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#myModal">More Info</button>
        <div class="modal fade" id="myModal" role="dialog">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header" style="display: block" >
                <h4 class="modal-title">${result.title}</h4>
              </div>
              <div class="modal-body">
                <p class="text-black-50 col">Release Date: ${result.release_date}</p>
                <p class="font-italic">${result.overview}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </li>`;
    list.insertAdjacentHTML('beforeend', movie);
  });
};

// GET query response from API
const fetchMovies = (query) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=f7c2d65bac51c2b56135bd561cf46a91&language=en-US&query=${query}&page=1&include_adult=false`)
    // If a response is rendered, then pass into a .json
    .then(response => response.json())
    .then(insertMovies);
};

// SEARCH
const updateSearch = (event) => {
  event.preventDefault(); // prevent <form>'s default refresh behaviour
  list.innerHTML = ''; // clear previous search list items
  const input = document.querySelector('#search-input');
  fetchMovies(input.value); // GET value of search-input and run fetchMovies
};

export { fetchMovies, updateSearch, insertMovies };
