
const audio = new Audio("sounds/dark_light.wav");
$('#dark_mode_icon').on('click', () => {
  audio.play();
});


var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

  // Add the active class to the appropriate link based on the current page
  if (currentPage === '/index.html#') {
    document.getElementById('work-experience-link').classList.add('text-primary');
  } else if (currentPage === '/projects') {
    document.getElementById('projects-link').classList.add('text-primary');
  } else if (currentPage === '/recognition') {
    document.getElementById('recognition-link').classList.add('text-primary');
  }
}

});

var closeBanner = document.getElementById('close_banner');
var bottomBanner = document.getElementById('bottom-banner');

    closeBanner.addEventListener('click', function() {
      bottomBanner.classList.add('hidden');
    });


