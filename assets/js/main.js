/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Previous selected topic
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
});
