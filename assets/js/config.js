var api_key =
  getCookie("bearer") != ""
    ? getCookie("bearer")
    : "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTNkODRhMjMyZTY1YmVmYWE3NzRhNzdkNWYxMmJhOSIsInN1YiI6IjYyZTEyODliNWNhNzA0MjYxYWVmZGQxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AfQeYfMCf2wYdaqE7fGmOQKkyGwCvzcvuMDIUitvAc0"; //key da api da sua aplicação no TMDB
var api_url_base = "https://api.themoviedb.org/3/";
var api_url_base_image = "https://image.tmdb.org/t/p/";
var api_language = "pt-BR";

if (api_key == "") {
  api_key = prompt("Enter bearer:");
  setCookie("bearer", api_key, 1);
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${api_key}`,
  },
};
