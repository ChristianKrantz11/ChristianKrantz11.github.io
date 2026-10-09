// Mobile menu toggle
var navToggle = document.querySelector(".nav-toggle");
var siteNav = document.getElementById("site-nav");

function setMenu(open) {
  siteNav.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

navToggle.addEventListener("click", function () {
  setMenu(!siteNav.classList.contains("open"));
});

// Close the menu after choosing a section or pressing Escape
siteNav.addEventListener("click", function (event) {
  if (event.target.tagName === "A") setMenu(false);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && siteNav.classList.contains("open")) {
    setMenu(false);
    navToggle.focus();
  }
});

// Keep the footer year current
document.getElementById("year").textContent = new Date().getFullYear();
