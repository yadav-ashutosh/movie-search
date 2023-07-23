let searchHistory = [];


function loadSearchHistory() {
  const storedSearchHistory = localStorage.getItem("searchHistory");
  if (storedSearchHistory) {
    searchHistory = JSON.parse(storedSearchHistory);
  }
}
function saveSearchHistory() {
  localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

loadSearchHistory(); // Load search history from local storage when the page loads
