const textDisplay = document.getElementById('type');
const phrases = ['A Visualization of my skills over time.'];
let i = 0;
let j = 0;
let currentPhrase = [];

function loop() {
  if (i < phrases.length) {
    if (j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
    }

    textDisplay.innerHTML = currentPhrase.join('');

    if (j <= phrases[i].length) {
      setTimeout(loop, 100); // Typing speed.
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


if (localStorage.getItem('color-theme')) {
    if (localStorage.getItem('color-theme') === 'light') {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    }
};






