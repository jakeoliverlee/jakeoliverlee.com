const textDisplay = document.getElementById("type");
const phrases = ["A Visualization of my skills over time."];
let i = 0;
let j = 0;
let currentPhrase = [];

function loop() {
  if (i < phrases.length) {
    if (j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    textDisplay.innerHTML = currentPhrase.join("");

    if (j <= phrases[i].length) {
      setTimeout(loop, 100); // Typing speed.
    }
  }
}

// Create an Intersection Observer to detect when the element becomes visible
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        loop(); // Start the typing effect when the element becomes visible
        observer.disconnect(); // Stop observing once the element is visible
      }
    });
  },
  {
    threshold: 1.0, // The observer triggers when the element is 100% visible
  }
);

observer.observe(textDisplay);

var themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
var themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

// Change the icons inside the button based on previous settings
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");

  // if set via local storage previously
  if (localStorage.getItem("color-theme")) {
    if (localStorage.getItem("color-theme") === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }

    // if NOT set via local storage previously
  } else {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    }
  }
});

if (localStorage.getItem("color-theme")) {
  if (localStorage.getItem("color-theme") === "light") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
}
