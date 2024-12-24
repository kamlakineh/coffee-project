window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const navbar1 = document.getElementById("navbar1");

  if (window.scrollY >= 50) {
    navbar.style.backgroundColor = "rgb(252, 252, 251)";
    navbar.style.boxShadow = "10px 10px 10px rgba(0, 0, 0, 0.08)";
    navbar1.style.paddingBottom = "40px";
  } else {
    navbar.style.backgroundColor = "rgb(244, 244, 244)";
    navbar.style.boxShadow = "none";
    navbar1.style.paddingBottom = "20px";
  }
});

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

function popupRightbutton() {
  const rightButton = document.getElementById("additionalLink");
  rightButton.style.display = "block";
}
function closeRightbutton() {
  const rightButton = document.getElementById("additionalLink");
  rightButton.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const rightButton = document.getElementById("additionalLink");

  button.addEventListener("click", () => {
    rightButton.style.display = "block";
  });
});
