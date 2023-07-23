const apiKey = "ea66732"; // Replace "xyz" with your OMDB API key
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const movieList = document.getElementById("movieList");
const modal = document.getElementById("modal");
const modalContent = document.getElementById("modalContent");
const closeModalButton = document.getElementById("closeModalButton");

function displayMovies(movies) {
  movieList.innerHTML = "";

  movies.forEach(movie => {
    const listItem = document.createElement("li");
    
    // Create an image element for the poster
    const posterImg = document.createElement("img");
    posterImg.src = movie.Poster !== "N/A" ? movie.Poster : "placeholder.png"; // Use a placeholder image if no poster available
    posterImg.alt = `${movie.Title} Poster`;
    posterImg.classList.add("poster");
    listItem.appendChild(posterImg);

    // Create a span element for the movie title
    const titleSpan = document.createElement("span");
    titleSpan.textContent = movie.Title;
    listItem.appendChild(titleSpan);

    listItem.addEventListener("click", () => {
      // You can perform additional actions when a movie is clicked
      console.log("Clicked movie:", movie);
    });

    movieList.appendChild(listItem);
  });
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
