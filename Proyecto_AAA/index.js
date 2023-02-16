'use strict'

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();
document.cookie = "usuario=John; expires=" + date + "; path=/; secure";

setTimeout(() => {
  alert(document.cookie);
}, 3000);


/*
const aceptarCookies = document.querySelector(".aceptar-cookies");

aceptarCookies.addEventListener("click", function () {
    document.cookie = "user=John";
    alert(document.cookie);

  document.querySelector(".banner-cookies").style.display = "none";
  localStorage.setItem("aceptarCookies", true);
  let fecha = new Date(new Date().getTime() + 3600 * 1000 * 24 * 365);
  document.cookie = "username=aceptarCookies; expires=" + fecha.toUTCString() + "; path=" + "/";
  localStorage.setItem("aceptarCookies", valor);
});

if (document.cookie.split(';').some((item) => item.trim().startsWith('aceptarCookies=true'))) {
  document.querySelector(".banner-cookies").style.display = "none";
}

if (localStorage.getItem("aceptarCookies")) {
    document.querySelector(".banner-cookies").style.display = "none";
}*/