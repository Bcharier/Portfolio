const buttonOn = document.getElementById("switch-on");
const buttonOff = document.getElementById("switch-off");
const pageContainer = document.getElementById("page-container");
const firstName = document.getElementById("name-delay0");
const lastName = document.getElementById("name-delay1");
const githubLink = document.getElementById("github-link");
const linkedinLink = document.getElementById("linkedin-link");
const emailLink = document.getElementById("email-link");
const jobDescription = document.getElementById("job-description");
const description = document.getElementById("description");
const arrowScroll = document.getElementById("arrow-scroll");
const projects = document.getElementsByClassName("project-presentation");
const projectPresentation = document.getElementById("project-presentation");
const buttonLang = document.getElementById("lang-choice");
const buttonFr = document.getElementById("button-fr");
const buttonEn = document.getElementById("button-en");
const nav = document.querySelector("nav");
const frontEnd = document.getElementById("front-end");
const alternance = document.getElementById("alternance");
const navAbout = document.getElementById("nav-about");
const navProjects = document.getElementById("nav-projects");
const navContact = document.getElementById("nav-contact");
const descriptionText = document.getElementById("description-text");
const header = document.querySelector("header");
const main = document.querySelector("main");



// Apparition des éléments on click
buttonOn.addEventListener("click", checkLight);
buttonOff.addEventListener("click", checkLight);

let lights = false;
function checkLight() {
  if (lights == false) {
    lightsOn();
    lights = true;
  }
  else {
    lightsOff();
    lights = false
  }
}

const lightsOn = () => {
  // Changement d'apparence du bouton
  buttonOn.classList.remove("switch-on");
  buttonOn.classList.add("switch-off");
  buttonOff.classList.remove("switch-off");
  buttonOff.classList.add("switch-on");
  // Apparition des éléments de la page
  pageContainer.style.opacity = "1";
  // Lancement des animations de lumières
  firstName.classList.add("name-appear-delay0");
  lastName.classList.add("name-appear-delay1");
  jobDescription.classList.add("small-title-appear");
  description.classList.add("item-appear-delay1");
  githubLink.classList.add("socials-appear-delay0");
  linkedinLink.classList.add("socials-appear-delay1");
  emailLink.classList.add("socials-appear-delay0");
  arrowScroll.classList.add("scroll-appear");
  buttonLang.classList.add("item-appear-delay0");
  nav.classList.add("item-appear-delay0");
}

const lightsOff = () => {
  // Changement d'apparence du bouton
  buttonOn.classList.remove("switch-off");
  buttonOn.classList.add("switch-on");
  buttonOff.classList.remove("switch-on");
  buttonOff.classList.add("switch-off");
  // Disparition des éléments de la page
  pageContainer.style.opacity = "0";
  // Retirer les animations de lumières
  firstName.classList.remove("name-appear-delay0");
  lastName.classList.remove("name-appear-delay1");
  jobDescription.classList.remove("small-title-appear");
  description.classList.remove("item-appear-delay1");
  githubLink.classList.remove("socials-appear-delay0");
  linkedinLink.classList.remove("socials-appear-delay1");
  emailLink.classList.remove("socials-appear-delay0");
  arrowScroll.classList.remove("scroll-appear");
  arrowScroll.classList.remove("scroll-appear-again");
  buttonLang.classList.remove("item-appear-delay0");
  nav.classList.remove("item-appear-delay0");
}


// Apparition des éléments on scroll
var myScrollFunc = function () {
  var y = window.scrollY;
  if (y > 0) {
    header.classList.add("sticky");
    main.classList.add("sticky-padding");
  }

  if (y == 0) {
    header.classList.remove("sticky");
    main.classList.remove("sticky-padding");
  }

  if (y >= 500) {
    projectPresentation.classList.add("projects-appear");
  }

  if (y >= 4200) {
    arrowScroll.classList.remove("scroll-appear");
    arrowScroll.classList.remove("scroll-appear-again");
  }

  if (y <= 4200) {
    arrowScroll.classList.add("scroll-appear-again");
  }

  else {
  }
};



window.addEventListener("scroll", myScrollFunc);

// Changement de la langue de la page 

buttonFr.addEventListener("click", langSwitchFr);
buttonEn.addEventListener("click", langSwitchEn);

function langSwitchEn() {
  frontEnd.innerHTML = "Front End Developper";
  frontEnd.classList.add("lang-switch");
  alternance.innerHTML = "Looking for an apprenticeship";
  alternance.classList.add("lang-switch");
  navAbout.innerHTML = "ABOUT";
  navProjects.innerHTML = "PROJECTS";
  navProjects.classList.add("lang-switch");
  navAbout.classList.add("lang-switch");
  navContact.classList.add("lang-switch");
  descriptionText.innerHTML = "Passionnate about coding and curious by nature, I am looking for a company willing to accompany my development through an apprenticeship.";
  descriptionText.classList.add("lang-switch");
  setTimeout(clearClass, 1500);
}

function langSwitchFr() {
  frontEnd.innerHTML = "Développeur Front End";
  frontEnd.classList.add("lang-switch");
  alternance.innerHTML = "A la recherche d'une alternance";
  alternance.classList.add("lang-switch");
  navAbout.innerHTML = "A PROPOS";
  navProjects.innerHTML = "PROJETS";
  navProjects.classList.add("lang-switch");
  navAbout.classList.add("lang-switch");
  navContact.classList.add("lang-switch");
  descriptionText.innerHTML = `Passionné de code et curieux de nature, je suis à la recherche d'une
  entreprise pour m'accompagner dans ma formation en alternance.`
  descriptionText.classList.add("lang-switch");
  setTimeout(clearClass, 1500)
}

function clearClass() {
  frontEnd.classList.remove("lang-switch");
  alternance.classList.remove("lang-switch");
  navProjects.classList.remove("lang-switch");
  navAbout.classList.remove("lang-switch");
  navContact.classList.remove("lang-switch");
  descriptionText.classList.remove("lang-switch");
}
