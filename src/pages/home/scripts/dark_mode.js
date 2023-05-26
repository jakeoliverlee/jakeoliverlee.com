const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
const themeToggleBtn = document.getElementById("theme-toggle");
const toggleIconsDark = document.querySelectorAll(".toggleIconDark");
const toggleIconsLight = document.querySelectorAll(".toggleIconLight");
const body = document.querySelector("html");


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

themeToggleBtn.addEventListener("click", function () {
  // toggle icons inside button
  themeToggleDarkIcon.classList.toggle("hidden");
  themeToggleLightIcon.classList.toggle("hidden");
  toggleIconsDark.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
  toggleIconsLight.forEach((icon) => {
    icon.classList.toggle("hidden");
  });

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
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
}

// Code for switching favicon based on dark mode/light mode

function setFavicon(mode) {
  const favicon = document.getElementById("favicon");
  // if html class attribute contains "dark"
  if (mode === "dark") {
    favicon.setAttribute("href", "assets/images/favicon-light.ico");
  } else {
    favicon.setAttribute("href", "assets/images/favicon-dark.ico");
  }
}

function isDarkMode() {
  return body.classList.contains("dark");
}

function checkInitialFavicon() {
  if (isDarkMode()) {
    favicon.setAttribute("href", "assets/images/favicon-dark.ico");
  } else {
    favicon.setAttribute("href", "assets/images/favicon-light.ico");
  }
}

checkInitialFavicon();

function updateFavicon() {
  if (isDarkMode()) {
    setFavicon("dark");
  } else {
    setFavicon("light");
  }
}

function toggleTheme() {
  body.classList.toggle("dark");
  updateFavicon();
}

// Function to update the visibility of the icons
function updateIcons() {
  if (
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    toggleIconsDark.forEach((icon) => {
      icon.classList.remove("hidden");
    });
    toggleIconsLight.forEach((icon) => {
      icon.classList.add("hidden");
    });
  } else {
    toggleIconsLight.forEach((icon) => {
      icon.classList.remove("hidden");
    });
    toggleIconsDark.forEach((icon) => {
      icon.classList.add("hidden");
    });
  }
}

// Update the icons based on previous settings
updateIcons();
