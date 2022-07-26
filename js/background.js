const images = [
    "지브리 배경1.jpg",
    "지브리 배경2.jpg",
    "지브리 배경3.jpg",
    "지브리 배경4.jpg",
    "지브리 배경5.jpg",
    "지브리 배경6.jpg",
    "지브리 배경7.jpg",
    "지브리 배경8.jpg",
    "지브리 배경9.jpg",
    "지브리 배경10.jpg",
    "지브리 배경11.jpg",
    "지브리 배경12.jpg",
    "지브리 배경13.jpg",
    "지브리 배경14.jpg",
    "지브리 배경15.jpg",
    "지브리 배경16.jpg",
    "지브리 배경17.jpg"
];

const $back = document.querySelector('#bgImg');
const chosenImage = images[Math.floor(Math.random() * images.length)];

const $bgImage = document.createElement("img");

$bgImage.src =`/img/지브리 배경/${chosenImage}`;

$back.appendChild($bgImage);