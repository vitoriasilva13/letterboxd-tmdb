document.addEventListener("DOMContentLoaded", ready);

function ready() {
  const searchParams = new URLSearchParams(window.location.search);
  let busca = encodeURIComponent(searchParams.get("search"));

  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${busca}&include_adult=false&language=en-US&page=1`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      document.getElementById("qtde-search").innerHTML = response.total_results;
      document.getElementById("text-search").innerHTML = busca;
      response.results.forEach((element) => {
        document.getElementById("search-results").insertAdjacentHTML(
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
}
