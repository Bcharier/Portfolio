const pageContainer = document.getElementById("page-container");
const firstName = document.getElementById("name-delay0");
const lastName = document.getElementById("name-delay1");
const githubLink = document.getElementById("github-link");
const linkedinLink = document.getElementById("linkedin-link");
const emailLink = document.getElementById("email-link");
const jobDescription = document.getElementById("job-description");
const description = document.getElementById("description");
const arrowScroll = document.querySelectorAll(".arrow-scroll");
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
const navResponsive = document.getElementById("nav-responsive");
const closeIcon = document.getElementById("close-icon");
const hamburgerIcon = document.getElementById("hamburger-icon");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const responsiveHome = document.getElementById("responsive-home");
const responsiveAbout = document.getElementById("responsive-about");
const responsiveProjects = document.getElementById("responsive-projects");
const responsiveContact = document.getElementById("responsive-contact");
const responsiveLinks = document.querySelectorAll(".responsive-links");
const aboutTitle = document.getElementById("about-title");
const aboutText = document.getElementById("about-text");
const projectTitle = document.getElementById("project-title");
const textReservia = document.getElementById("text-reservia");
const textOhmyfood = document.getElementById("text-ohmyfood");
const textGameon = document.getElementById("text-gameon");
const textFisheye = document.getElementById("text-fisheye");
const contactTitle = document.getElementById("contact-title");
const contactLinkedin = document.getElementById("contact-linkedin");
const contactMail = document.getElementById("contact-mail");
const arrowScrollDown = document.getElementById("arrow-scroll-down");
const arrowScrollUp = document.getElementById("arrow-scroll-up");
const contactSection = document.getElementById("contact");


/* 
Changement de la langue de la page 
 */
buttonFr.addEventListener("click", langSwitchFr);
buttonEn.addEventListener("click", langSwitchEn);

function langSwitchEn() {
  frontEnd.innerHTML = "Front End Developper";
  frontEnd.classList.add("lang-switch");
  alternance.innerHTML = "Looking for an apprenticeship";
  alternance.classList.add("lang-switch");
  navAbout.innerHTML = "ABOUT";
  navProjects.innerHTML = "MY PROJECTS";
  navProjects.classList.add("lang-switch");
  navAbout.classList.add("lang-switch");
  navContact.classList.add("lang-switch");
  descriptionText.innerHTML = "Passionnate about coding, curious and rigorous, I am looking for a company willing to accompany my development through an apprenticeship.";
  descriptionText.classList.add("lang-switch");
  responsiveHome.innerHTML = `HOME`
  responsiveHome.classList.add("lang-switch");
  responsiveAbout.innerHTML = `ABOUT`
  responsiveAbout.classList.add("lang-switch");
  responsiveProjects.innerHTML = `MY PROJECTS`
  responsiveProjects.classList.add("lang-switch");
  responsiveContact.innerHTML = `CONTACT`
  responsiveContact.classList.add("lang-switch");
  aboutTitle.innerHTML = `About me`;
  aboutTitle.classList.add("lang-switch");
  aboutText.innerHTML = ` 
  <p>After a first career in international project management, I found my true passion in web development and I am currently switching career to become a full time front end developper</p>
  <p>I am following a front end developper cursus with OpenClassrooms, I am comfortable with HTML, CSS/SASS, JS and training to be proficient with React and Tailwind</p>`;
  aboutText.classList.add("lang-switch");
  projectTitle.innerHTML = `My Projects`;
  projectTitle.classList.add("lang-switch");
  contactTitle.innerHTML = `Contact Me`;
  contactTitle.classList.add("lang-switch");
  contactLinkedin.innerHTML = `On Linkedin`;
  contactLinkedin.classList.add("lang-switch");
  contactMail.innerHTML = `By Mail`;
  contactMail.classList.add("lang-switch");
  textReservia.innerHTML = `
  <p> OpenClassrooms project</p>
  <p>
    Integration of the homepage of an apartement rental web app
  </p>
  <ul>
  <li>Responsive on mobile and tablet</li>
    <li>Use of flexbox to organize elements</li>
  </ul>`;

  textReservia.classList.add("lang-switch");
  textOhmyfood.innerHTML = `<p> OpenClassrooms project</p>
  <p>
    Integration of an online meal reservation web app
  </p>
  <ul>
    <li>Responsive on mobile and tablet</li>
    <li>CSS Keyframes animations</li>
    <li>Use of SASS for CSS organization</li>
  </ul>`;
  textOhmyfood.classList.add("lang-switch");
  textGameon.innerHTML = ` <p> OpenClassrooms project</p>
  <p>
    Creation of a contact form with field validation for online video games tournament organization
  </p>
  <ul>
  <li>Responsive on mobile and tablet</li>
    <li>Integration of a contact form with JS</li>
    <li>
      Field validation with error messages
    </li>
  </ul>`;
  textGameon.classList.add("lang-switch");
  textFisheye.innerHTML = `<p>OpenClassrooms project - Work In Progress</p>
  <p>Creation of a photographer promotionnal web app</p>
  
  <ul>
  <li>Responsive on mobile and tablet</li>
    <li>
    Dynamic generation of informations through Json data
    </li>
    <li>Filters to browse through pictures and photographers</li>
    <li>Lightbox to visualize pictures and videos</li>
  </ul>`;
  textFisheye.classList.add("lang-switch");
  setTimeout(clearClass, 1500);
}

function langSwitchFr() {
  frontEnd.innerHTML = "Développeur Front End";
  frontEnd.classList.add("lang-switch");
  alternance.innerHTML = "A la recherche d'une alternance";
  alternance.classList.add("lang-switch");
  navAbout.innerHTML = "A PROPOS";
  navAbout.classList.add("lang-switch");
  navProjects.innerHTML = "MES PROJETS";
  navProjects.classList.add("lang-switch");
  navContact.classList.add("lang-switch");
  descriptionText.innerHTML = `Passionné de code, curieux et rigoureux, je suis à la recherche d'une
  entreprise pour m'accompagner dans ma formation en alternance.`
  descriptionText.classList.add("lang-switch");
  responsiveHome.innerHTML = `ACCUEIL`;
  responsiveHome.classList.add("lang-switch");
  responsiveAbout.innerHTML = `A PROPOS`;
  responsiveAbout.classList.add("lang-switch");
  responsiveProjects.innerHTML = `MES PROJETS`;
  responsiveProjects.classList.add("lang-switch");
  responsiveContact.innerHTML = `CONTACT`;
  responsiveContact.classList.add("lang-switch");
  aboutTitle.innerHTML = `A propos de moi`;
  aboutTitle.classList.add("lang-switch");
  aboutText.innerHTML = ` 
  <p>Après une première carrière dans la gestion de projet internationaux, j'ai trouvé ma vraie passion dans le développement et suis en cours de reconversion professionnelle.</p>
  <p>En formation de développeur Front End chez OpenClassrooms, je suis à l'aise en HTML, CSS/SASS, JS et en montée de compétences sur React et Tailwind.</p>`;
  aboutText.classList.add("lang-switch");
  projectTitle.innerHTML = `Mes Projets`;
  projectTitle.classList.add("lang-switch");
  contactTitle.innerHTML = `Contactez moi`;
  contactTitle.classList.add("lang-switch");
  contactLinkedin.innerHTML = `Sur Linkedin`;
  contactLinkedin.classList.add("lang-switch");
  contactMail.innerHTML = `Par Mail`;
  contactMail.classList.add("lang-switch");
  textReservia.innerHTML = `<p>Projet OpenClassrooms</p>
  <p>
    Création d'une application web pour réserver ses repas en ligne
  </p>
  <ul>
    <li>Site responsif mobile et tablette</li>
    <li>Animations CSS keyframes</li>
    <li>Mise en place de SASS</li>
  </ul>`;
  textReservia.classList.add("lang-switch");
  textOhmyfood.innerHTML = `<p>Projet OpenClassrooms</p>
  <p>
    Création d'une application web pour réserver ses repas en ligne
  </p>
  <ul>
    <li>Site responsif mobile et tablette</li>
    <li>Animations CSS keyframes</li>
    <li>Mise en place de SASS</li>
  </ul>`;
  textOhmyfood.classList.add("lang-switch");
  textGameon.innerHTML = ` <p>Projet OpenClassrooms</p>
  <p>
    Réalisation d'un formulaire de contact avec validation des
    champs pour un site d'organisation de tournois de jeux-vidéo
  </p>
  <ul>
    <li>Site responsif mobile</li>
    <li>Mise en place d'un formulaire de contact en JavaScript</li>
    <li>
      Validation des champs et affichage de messages d'erreurs
    </li>
  </ul>`;
  textGameon.classList.add("lang-switch");
  textFisheye.innerHTML = `<p>Projet OpenClassrooms - En cours de réalisation</p>
  <p>Création d'une plateforme de promotion de photographes</p>
  <ul>
    <li>Site responsif mobile</li>
    <li>
      Génération dynamique des informations via des données Json
    </li>
    <li>Filtres de recherche pour trier les photographes</li>
    <li>Lightbox pour visionner photos et vidéos</li>
  </ul>`;
  textFisheye.classList.add("lang-switch");
  setTimeout(clearClass, 1500)
}

function clearClass() {
  frontEnd.classList.remove("lang-switch");
  alternance.classList.remove("lang-switch");
  navProjects.classList.remove("lang-switch");
  navAbout.classList.remove("lang-switch");
  navContact.classList.remove("lang-switch");
  descriptionText.classList.remove("lang-switch");
  responsiveHome.classList.remove("lang-switch");
  responsiveAbout.classList.remove("lang-switch");
  responsiveProjects.classList.remove("lang-switch");
  responsiveContact.classList.remove("lang-switch");
  aboutTitle.classList.remove("lang-switch");
  aboutText.classList.remove("lang-switch");
  projectTitle.classList.remove("lang-switch");
  contactTitle.classList.remove("lang-switch");
  contactLinkedin.classList.remove("lang-switch");
  contactMail.classList.remove("lang-switch");
  textReservia.classList.remove("lang-switch");
  textOhmyfood.classList.remove("lang-switch");
  textGameon.classList.remove("lang-switch");
  textFisheye.classList.remove("lang-switch");
}

/* 
Apparition des éléments au chargement de la page
*/

const lightsOn = () => {
  if (window.innerWidth > 0) {
    firstName.classList.add("name-appear-delay0");
    lastName.classList.add("name-appear-delay1");
    frontEnd.classList.add("item-appear-delay0");
    jobDescription.classList.add("small-title-appear");
    description.classList.add("item-appear-delay1");
    githubLink.classList.add("socials-appear-delay0");
    linkedinLink.classList.add("socials-appear-delay1");
    emailLink.classList.add("socials-appear-delay2");
    buttonLang.classList.add("item-appear-delay0");
    nav.classList.add("item-appear-delay0");
    hamburgerMenu.classList.add("item-appear-delay0");
  }
  if (window.innerWidth > 900) {
    arrowScrollDown.classList.add("scroll-appear");
  }

  if (window.innerWidth < 900) {
    arrowScrollDown.style.display = "none";
    arrowScrollUp.style.display = "none";
  }
}

lightsOn();


/* 
Responsive Hamburger menu
*/

function responsiveNav() {
  if (navResponsive.style.display === "inline-block") {
    navResponsive.style.display = "none";
    closeIcon.style.display = "none"
    hamburgerIcon.style.display = "inline-block"
  }

  else {
    navResponsive.style.display = "inline-block";
    closeIcon.style.display = "inline-block";
    hamburgerIcon.style.display = "none";
    responsiveLinks.forEach((div) => div.addEventListener("click", closeResponsiveNav));
  }
}

function closeResponsiveNav() {
  navResponsive.style.display = "none";
  closeIcon.style.display = "none";
  hamburgerIcon.style.display = "inline-block";
}

/* 
Scroll to next section with arrows
*/

arrowScrollDown.addEventListener("click", scrollToNextSection);
arrowScrollUp.addEventListener("click", scrollToTop);

function scrollToNextSection() {
  const pageTitle = document.getElementById("page-title");
  const aboutSection = document.getElementById("about");


  let aboutPosition = (header.offsetHeight + pageTitle.offsetHeight + jobDescription.offsetHeight + description.offsetHeight + (aboutSection.offsetHeight / 2));

  let projectsPosition = (header.offsetHeight + pageTitle.offsetHeight + jobDescription.offsetHeight + description.offsetHeight + aboutSection.offsetHeight + (projectPresentation.offsetHeight / 4));

  let contactPosition = document.body.offsetHeight;

  if (window.scrollY < (aboutPosition)) {
    window.scrollTo(0, aboutPosition);
  }

  if (window.scrollY >= aboutPosition - 500 && window.scrollY < projectsPosition) {
    window.scrollTo(0, projectsPosition);
  }

  if (window.scrollY >= projectsPosition - 500) {
    window.scrollTo(0, contactPosition);
  }
}

function scrollToTop() {
  const pageTitle = document.getElementById("page-title");
  const aboutSection = document.getElementById("about");
  let contactPosition = (header.offsetHeight + pageTitle.offsetHeight + jobDescription.offsetHeight + description.offsetHeight + aboutSection.offsetHeight + projectPresentation.offsetHeight);

  if (window.scrollY >= contactPosition) {
    window.scrollTo(0, 0);
  }
}

/* 
Apparition des éléments on scroll
*/

function myScrollFunction() {
  const pageTitle = document.getElementById("page-title");
  const aboutSection = document.getElementById("about");

  let y = window.scrollY;
  let descriptionPosition = (header.offsetHeight + pageTitle.offsetHeight + jobDescription.offsetHeight + description.offsetHeight);

  let aboutPosition = (header.offsetHeight + pageTitle.offsetHeight + jobDescription.offsetHeight + description.offsetHeight + aboutSection.offsetHeight);

  let projectsPosition = (header.offsetHeight + pageTitle.offsetHeight + jobDescription.offsetHeight + description.offsetHeight + aboutSection.offsetHeight + projectPresentation.offsetHeight);

  if (y > 0) {
    header.classList.add("sticky");
  }

  if (y == 0) {
    header.classList.remove("sticky");
  }

  if (y > aboutPosition) {
    projectPresentation.classList.add("section-appear");
  }

  if (y > descriptionPosition) {
    aboutSection.classList.add("section-appear");
  }

  if (y > projectsPosition && window.innerWidth > 900) {
    contactSection.classList.add("section-appear");
  }

  if (window.innerWidth < 900) {
    contactSection.style.opacity = "1";
  }

  if (y > 4200 && window.innerWidth > 900) {
    arrowScrollDown.classList.remove("scroll-appear");
    arrowScrollDown.classList.remove("scroll-appear-again");
    arrowScrollUp.classList.add("scroll-appear-fast");
    arrowScrollUp.style.display = "block";
    arrowScrollDown.style.display = "none";
  }

  if (y < 4200 && window.innerWidth > 900) {
    arrowScrollDown.classList.add("scroll-appear-again");
    arrowScrollUp.classList.remove("scroll-appear-fast");
    arrowScrollUp.style.display = "none";
    arrowScrollDown.style.display = "block";
  }
}


window.addEventListener("scroll", myScrollFunction);

