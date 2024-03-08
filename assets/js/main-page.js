document.addEventListener("DOMContentLoaded", ready);

function ready() {
  fetch(
    "https://api.themoviedb.org/3/movie/popular?language=pt-BR&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      debugger;
      document.getElementById("main-picture").style.background =
        "url(" +
        getImage(1280, response.results[0].backdrop_path) +
        ") no-repeat center/cover";
    })
    .catch((err) => console.error(err));

  document.getElementById("search").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      document.getElementById("btn-search").click();
    }
  });
}
