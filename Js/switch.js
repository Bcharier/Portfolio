const buttonOn = document.getElementById("switch-on");
const buttonOff = document.getElementById("switch-off");
const pageContainer = document.getElementById("page-container");
const firstName = document.getElementById("name-delay0");
const lastName = document.getElementById("name-delay1");
const githubLink = document.getElementById("github-link");
const linkedinLink = document.getElementById("linkedin-link");
const jobDescription = document.getElementById("job-description");
const description = document.getElementById("description");
const arrowScroll = document.getElementById("arrow-scroll");

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
    jobDescription.classList.add("item-appear-delay0");
    description.classList.add("item-appear-delay1");
    githubLink.classList.add("socials-appear-delay0");
    linkedinLink.classList.add("socials-appear-delay1");
    arrowScroll.classList.add("scroll-appear");

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
    jobDescription.classList.remove("item-appear-delay0");
    description.classList.remove("item-appear-delay1");
    githubLink.classList.remove("socials-appear-delay0");
    linkedinLink.classList.remove("socials-appear-delay1");
    arrowScroll.classList.remove("scroll-appear");
}



