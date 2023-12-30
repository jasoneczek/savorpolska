// Functionality for hamburger menu
const hamburgerButton = document.querySelector('#hamburgerButton');
const mobileMenu = document.querySelector('#mobileMenu');

hamburgerButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  hamburgerButton.classList.toggle('close');
});