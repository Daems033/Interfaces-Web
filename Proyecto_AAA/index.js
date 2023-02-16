'use strict'

const aceptarCookies = document.querySelector(".aceptar-cookies");

aceptarCookies.addEventListener("click", function () {
    document.querySelector(".banner-cookies").style.display = "none";
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = "usuario=miCookie; expires=" + date + "; path=/; secure";
});

// Variables
let aside = document.querySelector("aside");
let testimonials = [
  {
    content:
      "A programmer who writes clean code fully understands the problem before writing the code.",
    audio: "audios/home.mp3",
    img: "imagenes/Selección_072.png",
    name: "DAMIAN GIL",
    job: "Programmer",
  },
  {
    content:
      "Graphic design should seduce, educate and, perhaps most importantly, provoke an emotional response.",
    audio: "audios/home.mp3",
    img: "imagenes/Selección_072.png",
    name: "KYLE WALKER",
    job: "Designer",
  }
];

// Funciones
let createCarousel = function (arr) {
  let i = 0;
  let carouselInterval = setInterval(function () {
    aside.innerHTML = `
    <h2>TESTIMONIALS</h2>
    <img src="${arr[i].img}" alt="Comillas">
    <p>${arr[i].content}</p>
    <audio controls style="margin-bottom:4em;" volume="1.0">
        <source src="${arr[i].audio}" type="audio/mpeg">
    </audio> 
    <span>${arr[i].name}</span>
    <span>${arr[i].job}</span>
    `;
    i++;
    if (i == arr.length) {
      i = 0;
    }
  }, 3000);
};


// Llamado de Función
createCarousel(testimonials);

