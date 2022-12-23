/* Buttons*/
const hamburgerButton = document.querySelector("#hamburger-btn");
const mobileMenu = document.querySelector("#mobile-menu");


/* Toggle Class list */
function toggleClassList(){
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.toggle("hidden");
}


/* Show Mobile Menu On Click  */
hamburgerButton.addEventListener("click", toggleClassList);
mobileMenu.addEventListener("click", toggleClassList);

