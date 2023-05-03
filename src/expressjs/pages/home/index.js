const textDisplay = document.getElementById('type');
const phrases = ['A Visualization of my skills over time.'];
let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;

function loop() {
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    } else if (isDeleting && j > 0) {
      currentPhrase.pop();
      j--;
    }

    textDisplay.innerHTML = currentPhrase.join(''); // Update innerHTML after modifying currentPhrase

    if (j === phrases[i].length && !isDeleting) {
      isDeleting = true;
      setTimeout(loop, 2000); // Pause time before starting to delete.
    } else if (j === 0 && isDeleting) {
      isDeleting = false;
      i = (i + 1) % phrases.length; // Make the effect loop continuously.
      currentPhrase = []; // Clear the current phrase before typing the next phrase.
      setTimeout(loop, 500); // Short delay before typing the next phrase.
    } else {
      setTimeout(loop, isDeleting ? 100 : 100); // Typing and deleting speed.
    }
  }
}

// Create an Intersection Observer to detect when the element becomes visible
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loop(); // Start the typing effect when the element becomes visible
      observer.disconnect(); // Stop observing once the element is visible
    }
  });
}, {
  threshold: 1.0 // The observer triggers when the element is 100% visible
});

observer.observe(textDisplay);





// const audio = new Audio("sounds/dark_light.wav");
// $('#dark_mode_icon').on('click', () => {
//   audio.play();
// });


// var themeToggleBtn = document.getElementById('theme-toggle');

// themeToggleBtn.addEventListener('click', function() {

//     // toggle icons inside button
//     themeToggleDarkIcon.classList.toggle('hidden');
//     themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    };






