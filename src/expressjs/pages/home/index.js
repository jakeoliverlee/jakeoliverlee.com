const audio = new Audio("sounds/dark_light.wav");
$('#dark_mode_icon').on('click', () => {
  audio.play();
});

const visitorCount = document.getElementById("visitor-count");

updateCounter();

function updateCounter() {
  fetch("http://127.0.0.1:3000?")
    .then(res => res.json())
    .then(data => {
      visitorCount.textContent = data.visits;
    })
}

sessionStorage.setItem("visit", "x");


function setActiveLink() {
  const currentPage = window.location.pathname; // Get the current page path
  const links = document.querySelectorAll('.nav a'); // Get all the links in the navbar

  // Loop through the links and remove the active class from all of them
  links.forEach(link => {
    link.classList.remove('text-primary');
  });

  // Add the active class to the appropriate link based on the current page
  if (currentPage === '/index.html#') {
    document.getElementById('work-experience-link').classList.add('text-primary');
  } else if (currentPage === '/projects') {
    document.getElementById('projects-link').classList.add('text-primary');
  } else if (currentPage === '/recognition') {
    document.getElementById('recognition-link').classList.add('text-primary');
  }
}

// Call the setActiveLink function when the page loads
window.onload = setActiveLink;
