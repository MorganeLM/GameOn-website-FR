// FORM CHECKING
// DOM Elements
let modalbg = document.querySelector(".bground");
let modalBtn = document.querySelectorAll(".modal-btn");
let modalClosingBtn = document.querySelector(".close")
let formData = document.querySelectorAll(".formData");
let form = document.querySelector('#inscriptionForm');

let firstName = document.querySelector('#first');
let lastName = document.querySelector('#last');
let email = document.querySelector('#email');
let birthDate = document.querySelector('#birthdate');
let quantity = document.querySelector('#quantity');
let towns = document.querySelectorAll(".location-checkbox");
let useConditions = document.querySelector(".checkbox1");
let nextEvent = document.querySelector(".checkbox2");

let errorMessages = [
  "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
  "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
  "Veuillez entrer une adresse email valide.",
  "Vous devez entrer votre date de naissance.",
  "Veuillez entrer un nombre positif ou nul.",
  "Vous devez choisir une option.",
  "Vous devez vérifier que vous acceptez les termes et conditions."
];

let error = [];

// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
// Les données doivent être saisies correctement :

// Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.

// check fields when typing
firstName.addEventListener('input', fistNameLenght);
lastName.addEventListener('input', lastNameLenght);
email.addEventListener('input', emailValidFormat);
birthDate.addEventListener('input', birthDateValid);
quantity.addEventListener('input', isANumber);

// check if all fields are well completed before submit
form.addEventListener("submit", function(e){
  e.preventDefault();

  if(error.length === 0){
    //succes
    console.log('Good job');
    //submit
  }else{
    //error
    console.log('WRONG')
    //return messages
  }
})

// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
function fistNameLenght(){
  let alertFirstNameLenght = document.querySelector(".first > p:first-of-type");
  if (this.value.length < 3){
      this.style.border = "2px solid red";
      alertFirstNameLenght.innerHTML = errorMessages[0];
  } else {
      this.style.border = "2px solid green";
      alertFirstNameLenght.innerHTML = "";
  }
}
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
function lastNameLenght(){
  let alertlastNameLenght = document.querySelector(".last > p:first-of-type");
  if (this.value.length < 3){
      this.style.border = "2px solid red";
      alertlastNameLenght.innerHTML = errorMessages[1];
  } else {
      this.style.border = "2px solid green";
      alertlastNameLenght.innerHTML =  "";
  }
}

// (3) L'adresse électronique est valide.
function emailValidFormat(){
  let alertEmailFormat = document.querySelector(".email > p:first-of-type");
  // REGEX "\S" =	Any Non-whitespace character
  let mailFormat = /\S+@\S+\.\S+/;
  if(this.value.match(mailFormat)){
    this.style.border = "2px solid green";
    alertEmailFormat.innerHTML =  "";
  }else{
    this.style.border = "2px solid red";
    alertEmailFormat.innerHTML = errorMessages[2];
  }
}

// (3bis) Date de naissance = date < aujourd'hui
function birthDateValid(){
  let alertBirthdate = document.querySelector(".birthdate > p:first-of-type");
  if (this.value.length < 3){
      this.style.border = "2px solid red";
      alertlastNameLenght.innerHTML = errorMessages[3];
  } else {
      this.style.border = "2px solid green";
      alertlastNameLenght.innerHTML =  "";
  }
}

// (4) Pour le nombre de concours, une valeur numérique est saisie.
function isANumber(){
  let alertQuantity = document.querySelector(".quantity > p:first-of-type");
    if (!isNaN(parseInt(this.value)) && Number.isInteger(Number(this.value)) && this.value >= 0){
      this.style.border = "2px solid green";
      alertQuantity.innerHTML =  ""; 
    }else {
      this.style.border = "2px solid red";
      alertQuantity.innerHTML = errorMessages[4];
  }
}

// (5) Un bouton radio est sélectionné.
// (6) La case des conditions générales est cochée, l'autre case est facultative / peut être laissée décochée



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

 

