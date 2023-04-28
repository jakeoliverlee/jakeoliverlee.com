var closeBanner = document.getElementById('close_banner');
var bottomBanner = document.getElementById('bottom-banner');

  closeBanner.addEventListener('click', function() {
    bottomBanner.classList.add('hidden');
  });

  showBanner.addEventListener('click', function() {
    bottomBanner.classList.remove('hidden');
  });