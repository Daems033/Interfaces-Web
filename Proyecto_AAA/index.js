'use strict'

const aceptarCookies = document.querySelector(".aceptar-cookies");

aceptarCookies.addEventListener("click", function () {
    document.querySelector(".banner-cookies").style.display = "none";
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = "usuario=miCookie; expires=" + date + "; path=/; secure";
});

/*
if (document.cookie.split(';').some((item) => item.trim().startsWith('aceptarCookies=true'))) {
    document.querySelector(".banner-cookies").style.display = "none";
}

if (localStorage.getItem("aceptarCookies")) {
    document.querySelector(".banner-cookies").style.display = "none";
}*/