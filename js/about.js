// Image slideshow functionality for About Page header

let i = 0;
const images = [];
const time = 4000;

images[0] = 'img/slideshow/boczek.jpg';
images[1] = 'img/slideshow/bulka.jpg';
images[2] = 'img/slideshow/golabki.jpg';
images[3] = 'img/slideshow/rurki.jpg';
images[4] = 'img/slideshow/schab.jpg';

function changeImage() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout('changeImage()', time);
}

window.onload = changeImage;