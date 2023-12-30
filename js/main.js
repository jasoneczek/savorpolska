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

// Functionality for Subscription form validation
const form = document.getElementById('subscriptionForm');
const messageContainer = document.getElementById('messageContainer');

form.onsubmit = function (event) {

  event.preventDefault();

  const emailValue = form.email.value.trim();

  if (emailValue === "") {
    setMessage("Please enter an email address.");
  } else if (!isValidEmail(emailValue)) {
    setMessage("Please enter a valid email.");
    form.email.value = "";
  } else {
    setMessage("Subscription successful!");
    form.email.value = ""
  }
};

function setMessage(message) {
  messageContainer.innerHTML = message;
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}