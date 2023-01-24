var deButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");

deButton.addEventListener("click", toggleMenu);

function toggleMenu() {  
  deNav.classList.toggle("toonMenu");
}
