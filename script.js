// Part 3
// Set Up
const registrationForm = document.getElementById("registration");
const username = document.querySelector("username");
const email = document.querySelector("email");
const password = document.querySelector("password");
let specialChars = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|";

// Number 1
// Username Validation
function usernameValidation(username) {
  if (username === "") {
    alert("You need to fill in a username");
    return false;
  }
  if (username.length < 4) {
    alert("Your username must be at least 4 characters long");
    return false;
  }
  if (username.specialChars < 2) {
    alert(
      `"Your username must contain at least one of these unique characters: " + ${specialChars}`
    );
    return false;
  }
  alert(`Your username is ${username}`);
  return true;
}
