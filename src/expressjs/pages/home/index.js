const audio = new Audio("sounds/dark_light.wav");
$('#dark_mode_icon').on('click', () => {
  audio.play();
});

var currentTime = new Date();
var year = currentTime.getFullYear();  
document.getElementById("copyright_year").innerHTML ="©" + new Date().getFullYear() + " Jake Lee";

const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('square-animation');
    }
  });
});

observer.observe(document.querySelector('.square'));
