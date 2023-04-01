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