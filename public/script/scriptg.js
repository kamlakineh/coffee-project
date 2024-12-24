window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const navbar1 = document.getElementById("navbar1");

  if (window.scrollY >= 50) {
    navbar.style.backgroundColor = "rgb(252, 252, 251)";
    navbar.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.08)";
    navbar1.style.paddingBottom = "30px";
  } else {
    navbar.style.backgroundColor = "rgb(244, 244, 244)";
    navbar.style.boxShadow = "none";
    navbar1.style.paddingBottom = "20px";
  }
});

const slider = document.getElementById("slider");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

let currentIndex = 0;

const images = document.querySelectorAll(".slider img");
const totalImages = images.length;

const animations = ["from-top", "from-left", "from-bottom"];
btnRight.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
});

btnLeft.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
const leftButton = document.getElementById("navbarLeftButton");
const leftButtonList = document.getElementById("navbarLeftButtonList");

leftButton.addEventListener("click", () => {
  if (
    leftButtonList.style.display === "none" ||
    leftButtonList.style.display === ""
  ) {
    leftButtonList.style.display = "block";
    leftButton.innerHTML = "&times;";
    leftButton.style.color = "red";
    leftButton.style.fontSize = "25px";
  } else {
    leftButtonList.style.display = "none";
    leftButton.innerHTML = `<img class="nav-bar-manu-icon" src="icon/iconManu.png" />`;
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const rightButton = document.getElementById("additionalLink");

  button.addEventListener("click", () => {
    rightButton.style.display = "block";
  });
});

function closeRightbutton() {
  const rightButton = document.getElementById("additionalLink");
  rightButton.style.display = "none";
}
function popupimge() {
  const div = document.getElementById("image-container");
  const pop = document.getElementById("image-container-id");
  if (div.style.display === "none" || div.style.display === "") {
    div.style.display = "block";

    if (window.innerWidth >= 1124) {
      pop.className = "grid";
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1124) {
      pop.className = "grid2";
    } else if (window.innerWidth <= 768) {
      pop.className = "flex";
    } else {
      pop.className = "";
    }
  } else {
    div.style.display = "none";
  }
}
