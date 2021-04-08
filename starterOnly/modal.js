// FORM CHECKING
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
const useConditions = document.querySelector(".checkbox1");
const nextEvent = document.querySelector(".checkbox2");

let errorMessages = [
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "Vous devez choisir une option.",
  "Vous devez vérifier que vous acceptez les termes et conditions.",
  "Vous devez entrer votre date de naissance."
];

// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
// Les données doivent être saisies correctement :
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
// (3) L'adresse électronique est valide.
// (4) Pour le nombre de concours, une valeur numérique est saisie.
// (5) Un bouton radio est sélectionné.
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée.
// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

// check field validation before submit
form.addEventListener("submit", function(){

})



// ????
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// OPEN / CLOSE MODAL
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

 

