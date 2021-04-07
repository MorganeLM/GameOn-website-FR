function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClosingBtn = document.querySelector(".close")
const formData = document.querySelectorAll(".formData");
const form = document.querySelector('#inscriptionForm');

const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const birthDate = document.querySelector('#birthdate');
const quantity = document.querySelector('#quantity');
const towns = document.querySelectorAll(".location-checkbox");
const useConditions = document.querySelector(".checkbox1")
const nextEvent = document.querySelector(".checkbox2")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// set modal close event
modalClosingBtn.addEventListener("click", closeModal);
// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// check field validation before submit
form.addEventListener("submit", function(){

})

