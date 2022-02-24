/*  Viewport Heigt Correction   */

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

/*  Starting Animation top & Sticky Header/Footer  */

const navPage = document.getElementById("nav-page");
const aboutMusicContainer = document.querySelector(".about-music-container");
const tv = document.querySelector(".tv");
const menuBtn = document.getElementById("menu-button-container");

function toggleMenu() {
  navPage.classList.toggle("nav-page2");
  menuBtn.classList.toggle("open");
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) &&
    window.window.innerWidth < 992
  ) {
    document.getElementById("stickyHeader").style.height = "15vh";
    document.getElementById("stickyFooter").style.height = "15vh";
    document.getElementById("music").style.transform = "translateY(0vh)";
    document.getElementById("menu-button-container").style.height = "40px";
    document.getElementById("menu-button-container").style.width = "40px";
    document.getElementById("nav-container").style.flexBasis = "70%";
  } else if (window.window.innerWidth < 992) {
    document.getElementById("stickyHeader").style.height = "25vh";
    document.getElementById("stickyFooter").style.height = "25vh";
    document.getElementById("music").style.transform = "translateY(25vh)";
    document.getElementById("menu-button-container").style.height = "45px";
    document.getElementById("menu-button-container").style.width = "45px";
    document.getElementById("nav-container").style.flexBasis = "50%";
  }
  if (
    (document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200) &&
    window.window.innerWidth >= 992
  ) {
    document.getElementById("about-container").style.transform =
      "translateY(0px)";
  } else if (window.window.innerWidth >= 992) {
    document.getElementById("about-container").style.transform =
      "translateY(200px)";
  }

  const rect = aboutMusicContainer.getBoundingClientRect();
  const rect2 = tv.getBoundingClientRect();
  const rect3 = document
    .getElementById("about-container")
    .getBoundingClientRect();

  if (
    rect3.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) - 100
  ) {
    document.getElementById("music-container").style.transform =
      "translateY(0px)";
  } else {
    document.getElementById("music-container").style.transform =
      "translateY(200px)";
  }

  if (
    rect.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) - 150
  ) {
    document.getElementById("video-animation").style.transform =
      "translateY(0px)";
  } else {
    document.getElementById("video-animation").style.transform =
      "translateY(200px)";
  }

  if (
    rect2.bottom <=
    (window.innerHeight || document.documentElement.clientHeight) - 150
  ) {
    document.getElementById("shows-animation").style.transform = "none";
  } else {
    document.getElementById("shows-animation").style.transform =
      "translateY(200px)";
  }
}

/*  Imprint & Nav Open/Close       transition: 3s ease-out;   */

const imprint = document.querySelector(".imprint");
const imprintText = document.querySelector(".imprint-text");

imprintText.addEventListener("click", () => {
  imprint.classList.toggle("imprint-open");
});

function toggleImprint() {
  imprint.classList.toggle("imprint-open");
}

/*  Change Link Nav   */

document.querySelector(".about-link").href = "#music";
