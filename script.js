// Part 3
// Set Up
const registrationForm = document.getElementById("registration");
const username = document.querySelector("username");
const email = document.querySelector("email");
const password = document.querySelector("password");

// Number 1
// Username Validation
function usernameValidation(username) {
  if (username === "") {
    alert("You need to fill in a username");
  }
}
