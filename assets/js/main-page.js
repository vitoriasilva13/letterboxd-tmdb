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

  document.getElementById("btn-search").addEventListener("click", (event) => {
    let nome = document.getElementById("nome").value;
    nome = encodeURIComponent(nome);
    document.getElementById("corpo").innerHTML = "";
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${nome}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        response.results.forEach((element) => {
          document.getElementById("corpo").insertAdjacentHTML(
            "beforeend",
            `<form method='get' action='movie-details.html'>
              <input type='hidden' name='id' value='${element.id}'/>
              <button type='submit'><img width='60' src='${getImage(
                null,
                element.poster_path
              )}'/>${element.title}</button></form><br/>`
          );
        });
      })
      .catch((err) => console.error(err));
  });
}
