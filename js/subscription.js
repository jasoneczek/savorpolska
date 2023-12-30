// Functionality for Subscription form validation
const subscriptionForm = document.getElementById('subscriptionForm');
const subscriptionMessageContainer = document.getElementById('messageContainer');

subscriptionForm.onsubmit = function (event) {

  event.preventDefault();

  const emailValue = subscriptionForm.email.value.trim();

  if (emailValue === "") {
    setMessage("Please enter an email address.");
  } else if (!isValidEmail(emailValue)) {
    setMessage("Please enter a valid email.");
    subscriptionForm.email.value = "";
  } else {
    setMessage("Subscription successful!");
    subscriptionForm.email.value = ""
  }
};

function setMessage(message) {
  subscriptionMessageContainer.innerHTML = message;
}

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
}