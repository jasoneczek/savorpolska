// Functionality for Contact Form validation
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');
  const errorMessageContainer = document.getElementById('errorMessageContainer');
  const successMessageContainer = document.getElementById('successMessageContainer');

  contactForm.onsubmit = function (event) {

    event.preventDefault();

    const emailValue = contactForm.email.value.trim();

    if (emailValue === "") {
      setErrorMessage("Please enter an email address.");
    } else if (!isValidEmail(emailValue)) {
      setErrorMessage("Please enter a valid email.");
      contactForm.email.value = "";
    } else {
      setSuccessMessage("Thank you! Your message has been sent successfully.");
      contactForm.email.value = "";
      contactForm.message.value = "";
    }
  }

  function setErrorMessage(errorMessage) {
    errorMessageContainer.innerHTML = errorMessage;
  }

  function setSuccessMessage(successMessage) {
    successMessageContainer.innerHTML = successMessage;
  }

  function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }
})

