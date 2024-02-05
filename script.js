let menuicon = document.getElementById("menu-icon");
let navBar = document.getElementById("navbar-mobile");
let closeIcon = document.getElementById("close-icon");

menuicon.addEventListener("click", OpenMenu);
closeIcon.addEventListener("click", closeMenu)

function OpenMenu() {
    console.log("menu is clicked");
    navBar.classList.add("active");
}
function closeMenu() {
    navBar.classList.remove("active");
}