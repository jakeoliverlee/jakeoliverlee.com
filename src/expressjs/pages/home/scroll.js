var closeBanner = document.getElementById('close_banner');
var bottomBanner = document.getElementById('bottom-banner');

    closeBanner.addEventListener('click', function() {
      bottomBanner.classList.add('hidden');
    });

document.addEventListener('DOMContentLoaded', function() {
  var handsomeImage = document.getElementById('handsome');

  window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var scale = Math.max(0.5, 1 - scrollTop / 1000);

    handsomeImage.style.transform = `scale(${scale}) rotate(${scrollTop / 20}deg)`;
  });
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


