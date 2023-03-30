var audio = new Audio("sounds/dark_light.wav");
const darkModeIcon = document.querySelector('#dark_mode_icon');
darkModeIcon.addEventListener('click', () => {
    audio.play();
  });
