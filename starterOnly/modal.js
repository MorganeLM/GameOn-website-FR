// Elements du DOM 
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
let locationFiel = document.querySelector('.location');
let towns = document.querySelectorAll(".location-checkbox");
let useConditions = document.querySelector("#checkbox1");
let nextEvent = document.querySelector(".checkbox2");
let modalBody = document.querySelector('.modal-body');

// Autres variables
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
let locationCheckedValue;
let gcuCheckedValue;


// Evenements de vérification des champs
// Option : La validité des champs est vérifiée à la frappe / coche
firstName.addEventListener('input', fistNameLenght);
lastName.addEventListener('input', lastNameLenght);
email.addEventListener('input', emailValidFormat);
birthDate.addEventListener('input', birthDateValid);
quantity.addEventListener('input', isANumber);
towns.forEach((town) => town.addEventListener('change', isCheck(town)));
locationFiel.addEventListener('change', isOneOptionChecked);
useConditions.addEventListener('change', gcuChecked)

// Le formulaire doit être valide quand l'utilisateur clique sur "Submit"
form.addEventListener("submit", function(e){
  // Conserver les données du formulaire (ne pas effacer le formulaire) lorsqu'il ne passe pas la validation.
  e.preventDefault();

  // Validation des champs
  fistNameLenght();
  lastNameLenght();
  emailValidFormat();
  birthDateValid();
  isANumber();

  //Initialisation des checkbox (récupère l'état en l'absence de modification)
  towns.forEach((town) => isCheck(town));
  gcuChecked(useConditions);

  // Validation des checkbox
  isOneOptionChecked();
  let alertGcuChecked = document.querySelector(".gcu > p:first-of-type");
  if (!gcuCheckedValue){
      error.push('gcu error');
      alertGcuChecked.innerHTML = errorMessages[6];
  } else {
      alertGcuChecked.innerHTML = "";
      gcuCheckedValue = "";
  }

  // Validation formulaire complet
  if(error.length === 0){
    // Formulaire valide
    modalBody.innerHTML = '<p class="thankyou">Merci !<br/> Votre réservation a été reçue.</p><input class="button btn-submit" id="secondModalClosingBtn" type="submit" value="Fermer" />';
    document.querySelector('#secondModalClosingBtn').addEventListener("click", closeModal);
  }else{
    // Formulaire invalide -> messages affichés par fonctions précédantes, réinitialisation du tableau d'erreur(s) pour nouvelle soumission
    error = [];
  }
})

// == FONCTIONS
// FONCTIONS DE VERIFICATION DU FORMULAIRE
// (1) Le champ Prénom a un minimum de 2 caractères / n'est pas vide.
function fistNameLenght(){
  let alertFirstNameLenght = document.querySelector(".first > p:first-of-type");
  if (firstName.value.length < 2){
      firstName.style.border = "2px solid red";
      alertFirstNameLenght.innerHTML = errorMessages[0];
      error.push('firstname error')
  } else {
      firstName.style.border = "2px solid green";
      alertFirstNameLenght.innerHTML = "";
  }
}
// (2) Le champ du nom de famille a un minimum de 2 caractères / n'est pas vide.
function lastNameLenght(){
  let alertlastNameLenght = document.querySelector(".last > p:first-of-type");
  if (lastName.value.length < 2){
      lastName.style.border = "2px solid red";
      alertlastNameLenght.innerHTML = errorMessages[1];
      error.push('lastname error')
  } else {
      lastName.style.border = "2px solid green";
      alertlastNameLenght.innerHTML =  "";
  }
}

// (3) L'adresse électronique est valide.
function emailValidFormat(){
  let alertEmailFormat = document.querySelector(".email > p:first-of-type");
  // REGEX "\S" = any Non-whitespace character
  let mailFormat = /\S+@\S+\.\S+/;
  // Pour respecter la spécification HTML5 (MDN : https://developer.mozilla.org/fr/docs/Learn/Forms/Form_validation)
  let mailFormat2 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email.value.match(mailFormat) && email.value.match(mailFormat2)){
    email.style.border = "2px solid green";
    alertEmailFormat.innerHTML =  "";
  }else{
    email.style.border = "2px solid red";
    alertEmailFormat.innerHTML = errorMessages[2];
    error.push('email error')
  }
}

// (3bis) Date de naissance = date < aujourd'hui
function birthDateValid(){
  let alertBirthdate = document.querySelector(".birthdate > p:first-of-type");
  // Date du jour en ms
  let today = new Date;
  today = today.getTime();
  // Date sélectionnée en ms
  let birthday = new Date(birthDate.value);
  birthday = birthday.getTime();
  // La date de naissance est un nombre et inférieur à aujourd'hui
  if (isNaN(birthday) || birthday > today){
      birthDate.style.border = "2px solid red";
      alertBirthdate.innerHTML = errorMessages[3];
      error.push('birthdate error')
  } else {
      birthDate.style.border = "2px solid green";
      alertBirthdate.innerHTML =  "";
  }
}

// (4) Pour le nombre de concours, une valeur numérique est saisie.
function isANumber(){
  let alertQuantity = document.querySelector(".quantity > p:first-of-type");
    if (!isNaN(parseInt(quantity.value)) && Number.isInteger(Number(quantity.value)) && quantity.value >= 0){
      quantity.style.border = "2px solid green";
      alertQuantity.innerHTML =  ""; 
    }else {
      quantity.style.border = "2px solid red";
      alertQuantity.innerHTML = errorMessages[4];
      error.push('quantity error')
  }
}

// (5) Un bouton radio est sélectionné.
function isOneOptionChecked(){
  let alertOptionEmpty = document.querySelector(".location > p:first-of-type");
  if(!locationCheckedValue){
    alertOptionEmpty.innerHTML = errorMessages[5];
    error.push('location check error')
  }else{
    alertOptionEmpty.innerHTML = "";
  }
}

function isCheck(town){
  if(town.checked){
    locationCheckedValue = town.value;
  }
}

// (6) La case des conditions générales est cochée
function gcuChecked(){
  if(useConditions.checked){
    gcuCheckedValue = useConditions.value;
  }
}


// FONCTIONS D'AFFICHAGE
// Gère le toggle responsive (menu sandwich) de la barre de navigation
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Affiche la modal du formulaire
modalBtn.forEach((btn) => btn.addEventListener("click", function(){
  modalbg.style.display = "block";
}))

// Ferme la modal
modalClosingBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

 