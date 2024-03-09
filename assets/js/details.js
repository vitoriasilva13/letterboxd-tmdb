document.addEventListener("DOMContentLoaded", ready);

function ready() {
  const searchParams = new URLSearchParams(window.location.search);

  fetch(getInfo("movie", null, searchParams.get("id"), api_language), options)
    .then((data) => data.json())
    .then((data) => {
      document.getElementById("main-picture").style.background =
        "url(" +
        getImage(1280, data.backdrop_path) +
        ") no-repeat center/cover";
      document.querySelectorAll(".poster")[0].src = getImage(
        null,
        data.poster_path
      );
      document.querySelectorAll(".ano")[0].innerHTML = data.release_date;
      document.querySelectorAll(".nome")[0].innerHTML = data.original_title;
      document.querySelectorAll(".detalhes")[0].innerHTML = data.overview;
    });

  fetch(getCrew(searchParams.get("id")), options)
    .then((data) => data.json())
    .then((data) => {
      document.querySelectorAll(".diretor")[0].innerHTML = data.crew.filter(
        ({ job }) => job === "Director"
      )[0].name;
    });

  fetch(getCrew(searchParams.get("id")), options)
    .then((data) => data.json())
    .then((data) => {
      let atoresHTML = "";
      data.cast.slice(0, 10).forEach((ator) => {
        atoresHTML += `<span class='tag actor'>${ator.name} como ${ator.character}</span>`;
      });
      document.querySelectorAll(".cast")[0].innerHTML = atoresHTML;
    });
}
