window.addEventListener("load", () => {
  const loading = document.getElementById("loading");
  setTimeout(() => {
    loading.style.display = "none";
  }, 300);
});

const stopTime = 5000;
function startCounter(elementId, targetCount, stopTime) {
  const counterElement = document.getElementById(elementId);
  const initialCount = parseInt(counterElement.textContent, 10);
  const steps = targetCount - initialCount;
  const interval = Math.floor(stopTime / steps);
  let count = initialCount;
  const updateCount = setInterval(() => {
    count++;
    counterElement.textContent = count;
    if (count >= targetCount) {
      clearInterval(updateCount);
      counterElement.style.color = "brown";
    }
  }, interval);
}

let countStarted = false;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !countStarted) {
      countStarted = true;
      startCounter("counter1", 12, stopTime);
      startCounter("counter2", 55, stopTime);
      startCounter("counter3", 1200, stopTime);
      observer.unobserve(entry.target);
    }
  });
});

observer.observe(document.getElementById("target"));
function popupdown1(descriptionId, arrowId) {
  const descriptionElement = document.getElementById(descriptionId);
  const arrowElement = document.getElementById(arrowId);

  if (
    descriptionElement.style.display === "none" ||
    descriptionElement.style.display === ""
  ) {
    descriptionElement.style.display = "block";
    arrowElement.style.transform = "rotate(90deg)"; // Rotate the arrow
  } else {
    descriptionElement.style.display = "none";
    arrowElement.style.transform = "none"; // Reset the rotation
  }
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

const button = document.getElementById("myButton");
const rightButton = document.getElementById("additionalLink");

button.addEventListener("click", () => {
  rightButton.style.display = "block";
});

// function popupRightbutton() {}

function closeRightbutton() {
  const rightButton = document.getElementById("additionalLink");
  rightButton.style.display = "none";
}

const scrollToTopButton = document.getElementById("scrollToTop");
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });
});
