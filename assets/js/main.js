/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId)
  const nav = document.getElementById(navId)

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu')


/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-toggle-right";

// Previous selected topic
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? "bx-toggle-left"
    : "bx-toggle-right";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx-toggle-left" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  var scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__menu a[href*=${sectionId}]`)
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader() {
  const nav = document.getElementById('header');
  if (this.scrollY >= 200) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header')
  }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/

function scrollTop() {
  const scrollTop = document.getElementById("scroll-top");
  if (this.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop);

/*==================== SCROLL REVEAL ANIMATION ====================*/

const sr = ScrollReveal({
  distance: "30px",
  duration: 1800,
  reset: true,
});

sr.reveal(`.home__data, .home__img, .decoration__data, .accessory__content,`, {
  origin: "top",
  interval: 200,
});

sr.reveal(`.share__img, .send__content`, {
  origin: "left",
});

sr.reveal(`.share__data, .send__img`, {
  origin: "right",
});
