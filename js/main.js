document.addEventListener('DOMContentLoaded', function () {
  // Functionality for hamburger menu
  const hamburgerButton = document.querySelector('#hamburgerButton');
  const mobileMenu = document.querySelector('#mobileMenu');

  hamburgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    hamburgerButton.classList.toggle('close');
  });

  // Functionality for Recipes drowpown in mobile menu
  document.getElementById('mobileRecipesLink').addEventListener('click', function (event) {
  
    const mobileRecipesDropdown = document.getElementById('mobileRecipesDropdown');
    mobileRecipesDropdown.classList.toggle('show');
  })

})

