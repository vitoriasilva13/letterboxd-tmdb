function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getImage(width_size, img_path) {
  return `${api_url_base_image}/${
    width_size ? "w" + width_size : "original"
  }/${img_path}`;
}

function getCrew(item_id) {
  return `${api_url_base}/movie/${item_id}/credits`;
}

function getInfo(type, subcategory, item_id, language) {
  return `${api_url_base}${type}${subcategory ? "/" + subcategory : ""}${
    item_id ? "/" + item_id : ""
  }${language ? `?language=${api_language}` : ""}`;
}
