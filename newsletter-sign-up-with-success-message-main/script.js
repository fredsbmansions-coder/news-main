// Get HTML elements

const signupForm = document.getElementById("signupForm");

const emailInput = document.getElementById("email");

const errorMessage = document.getElementById("errorMessage");

const signupCard = document.getElementById("signupCard");

const successCard = document.getElementById("successCard");

const userEmail = document.getElementById("userEmail");

const dismissButton = document.getElementById("dismissButton");

// Check if email is valid

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}

// When the form is submitted

signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();

  // Check email

  if (!isValidEmail(email)) {
    emailInput.classList.add("invalid");

    errorMessage.style.display = "block";

    return;
  }

  // Remove error message

  emailInput.classList.remove("invalid");

  errorMessage.style.display = "none";

  // Show success message

  userEmail.textContent = email;

  signupCard.classList.add("hidden");

  successCard.classList.remove("hidden");
});

// Remove error when typing

emailInput.addEventListener("input", function () {
  emailInput.classList.remove("invalid");

  errorMessage.style.display = "none";
});

// Dismiss success message

dismissButton.addEventListener("click", function () {
  successCard.classList.add("hidden");

  signupCard.classList.remove("hidden");

  emailInput.value = "";
});
