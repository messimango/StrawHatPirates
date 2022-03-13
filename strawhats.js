// toggle nav-menu and close button

const toggle = document.querySelector(".toggle");
const close = document.querySelector(".close");
const navBar = document. querySelector(".nav-bar")

toggle.addEventListener("click", function() {
    navBar.classList.toggle("show-nav-bar");
});

close.addEventListener("click", function() {
    navBar.classList.remove("show-nav-bar");
});