import "./style.css";

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu")! as HTMLDivElement;
const navToggle = document.getElementById("nav-toggle")! as HTMLDivElement;
const navClose = document.getElementById("nav-close")! as HTMLDivElement;

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(
  ".nav-link"
)! as NodeListOf<HTMLAnchorElement>;

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE HEADER BACKGROUND ===============*/
function scrollHeader() {
  const header = document.getElementById("header")! as HTMLElement;
  if (window.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll(
  "section[id]"
) as NodeListOf<HTMLElement>;

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")!
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")!
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
