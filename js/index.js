let navbarRightSection = document.getElementById("navbarRight");
let barIcon = document.getElementById("barIcon");
let crossIcon = document.getElementById("crossIcon");

function hamburgerSection(){
    crossIcon.classList.toggle("disable");
    barIcon.classList.toggle("disable");
    navbarRightSection.classList.toggle("banner__navbar-right");
    navbarRightSection.classList.toggle("right-section");
}