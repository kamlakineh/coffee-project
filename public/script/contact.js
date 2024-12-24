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

function closeRightbutton() {
  const rightButton = document.getElementById("additionalLink");
  rightButton.style.display = "none";
}

function popupRightbutton() {
  const rightButton = document.getElementById("additionalLink");
  rightButton.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("myButton");
  const rightButton = document.getElementById("additionalLink");

  button.addEventListener("click", () => {
    rightButton.style.display = "block";
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  const envName = document.getElementById("name");
  const envEmail = document.getElementById("email");
  const envText = document.getElementById("text");
  e.preventDefault(); // Prevent the form from submitting normally
  const formData = new FormData(this); // Gather form data

  fetch(this.action, {
    method: this.method,
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        envName.value = "";
        envEmail.value = "";
        envText.value = "";
        document.getElementById("statusMessage").style.display = "block";
      } else {
        document.getElementById("statusMessage").innerText =
          "Oops! Something went wrong.";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      document.getElementById("statusMessage").innerText =
        "Oops! Something went wrong.";
    });
});
const closeButtonOk = document.getElementById("closebuttonOk");
closeButtonOk.addEventListener("click", () => {
  document.getElementById("statusMessage").style.display = "none";
});
// const scrollToTopButton = document.getElementById("scrollToTop");
// scrollToTopButton.addEventListener("click", () => {
//   window.scrollTo({
//     top: 0,
//     behavior: "instant",
//   });
// });
// function emailSend() {
//   Email.send({
//     Host: "smtp.mailendo.com",
//     Username: "kamlakineh88@gmail.com",
//     Password: "52C9DF2A184EC51015C7DE94CBFF593789B9",
//     To: "kamlkinehadik@gmail.com",
//     From: "kamlakinehadik@gmail.com",
//     Subject: "This is the subject",
//     Body: "And this is the body",
//   }).then((message) => alert(message));
// }
