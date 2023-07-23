const apiKey = "ea66732";
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModalButton = document.getElementById("closeModalButton");

const itemsPerPage = 3;
let currentPage = 1;

function displayMovies(movies) {
  movieList.innerHTML = "";

    // the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  movies.slice(startIndex, endIndex).forEach(movie => {

    const movieItemContainer = document.createElement("div");
    movieItemContainer.classList.add("movie-item"); 


    // Poster
    const posterImg = document.createElement("img");
    posterImg.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder.png"; 
    posterImg.alt = `${movie.Title} Poster`;
    posterImg.classList.add("poster");
    movieItemContainer.appendChild(posterImg);

    // Movie Details Container
    const movieDetailsContainer = document.createElement("div");
    movieDetailsContainer.classList.add("movie-details");

    // Title
    const titleSpan = document.createElement("span");
    titleSpan.textContent = movie.Title;
    titleSpan.classList.add("movie-title");
    movieDetailsContainer.appendChild(titleSpan);

    // Year
    const yearSpan = document.createElement("span");
    yearSpan.textContent = `(${movie.Year})`;
    yearSpan.classList.add("movie-year");
    movieDetailsContainer.appendChild(yearSpan);

    movieItemContainer.appendChild(movieDetailsContainer);

    movieList.appendChild(movieItemContainer);
  });
  prevPageButton.disabled = currentPage === 1;
  nextPageButton.disabled = endIndex >= movies.length;
}

async function searchMovies() {
  const searchTerm = searchInput.value;

    const URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${searchTerm}`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovies(data.Search);
    else {
        movieList.innerHTML = "<li>No movies found.</li>";
      }
}

searchButton.addEventListener("click", searchMovies);

function displayMovieDetails(movie) {
  modalContent.innerHTML = `
    <img src="${movie.poster}" alt="${movie.movieTitle} Poster" class="modal-poster">
    <h2>${movie.movieTitle}</h2>
    <p><strong>Year:</strong> ${movie.details.Year}</p>
    <p><strong>Plot:</strong> ${movie.details.Plot}</p>
    <p><strong>Genre:</strong> ${movie.details.Genre}</p>
    <!-- Add more details here if needed -->
  `;
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeModal);
  }

movieList.addEventListener("click", event => {
  const target = event.target;
  if (target.tagName === "LI") {
    const movieTitle = target.textContent;
    const selectedMovie = data.Search.find(movie => movie.Title === movieTitle);
    if (selectedMovie) {
      displayMovieDetails(selectedMovie);
    }
  }
});

function goToPreviousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayMovies(searchHistory);
  }
}

function goToNextPage() {
  const totalPages = Math.ceil(searchHistory.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayMovies(searchHistory);
  }
}
const prevPageButton = document.getElementById("prevPageButton");
const nextPageButton = document.getElementById("nextPageButton");

prevPageButton.addEventListener("click", goToPreviousPage);
nextPageButton.addEventListener("click", goToNextPage);
