// body
const body = document.querySelector("body");

// toggle
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const headerToggle = document.querySelector(".header__toggle");
let isOpened = false;

// menu
const menu = document.getElementById("menu");

headerToggle.addEventListener("click", () => {
  if (isOpened) {
    isOpened = false;
    // toggle
    openMenu.setAttribute("style", "display: block");
    closeMenu.setAttribute("style", "display: none");
    // menu
    menu.classList.add("fade-out");
    menu.classList.remove("fade-in");
    menu.setAttribute("style", "display: none");
    // body
    body.setAttribute("style", "overflow: auto");
  } else {
    isOpened = true;
    // toggle
    openMenu.setAttribute("style", "display: none");
    closeMenu.setAttribute("style", "display: block");
    // menu
    menu.classList.add("fade-in");
    menu.classList.remove("fade-out");
    menu.setAttribute("style", "display: block");
    // body
    body.setAttribute("style", "overflow: hidden");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768 && menu.classList.contains("fade-in")) {
    openMenu.setAttribute("style", "display: block");
    closeMenu.setAttribute("style", "display: none");
    menu.classList.add("fade-out");
    menu.classList.remove("fade-in");
    menu.setAttribute("style", "display: none");
    body.setAttribute("style", "overflow: auto");
  }
});
