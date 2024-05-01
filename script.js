// Part 3
// Set Up
const registrationForm = document.getElementById("registration");
const username = document.querySelector("username");
const email = document.querySelector("email");
const password = document.querySelector("password");
let specialChars = "!@#$%^&*()-_=+[{]};:'\",<.>/?\\|";
let upperLowerCase = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/;

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

// Number 2
// Email Validation
function emailValidation(email) {
  let emailVal = email.value;

  const atpos = emailVal.indexOf("@");
  const dotpos = emailVal.lastIndexOf(".");

  if (email.value === "") {
    alert("Please provide an email");
    email.focus();
    return false;
  }

  if (atpos < 1) {
    alert(
      "Your email must include an @ symbol, which must not be at the beginning of the email."
    );
    email.focus();
    return false;
  }

  if ((dotpos = "example.com")) {
    alert(`Email can not be from the domain "example.com."`);
    email.focus();
    return false;
  }

  return emailVal;
}

// Number 3
// Password Validation
function passwordValidation(password) {
  if (password.length < 12) {
    alert("Your password must be at least 12 characters long");
    return false;
  }
  if (password.upperLowerCase < 1) {
    alert("You need to use at least one uppercase and one lowercase character");
    return false;
  }
  if (password.number < 1) {
    alert("Your password must contain at least one number.");
    return false;
  }
  if (password.specialChars < 1) {
    alert(
      `"Your password must contain at least one of these unique characters: " + ${specialChars}`
    );
    return false;
  }
  if ((password = "password")) {
    alert("Your password cannot contain the word password ");
    return false;
  }
  if ((password = username)) {
    alert("Your password cannot be the same as your username");
    return false;
  }
  alert(`Your password is ${password}`);
  return true;
}
