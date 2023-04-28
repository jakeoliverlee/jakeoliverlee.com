var closeBanner = document.getElementById('close_banner');
    var bottomBanner = document.getElementById('bottom-banner');

    closeBanner.addEventListener('click', function() {
      bottomBanner.classList.add('hidden');
    });

window.addEventListener("scroll", reveal);

function reveal(){
  var reveals = document.querySelectorAll(".reveal");
  for(var i = 0; i < reveals.length; i++) {

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add("active");
    }
  }
}

// Add a scroll event listener to the window
window.addEventListener("scroll", handleScroll);

