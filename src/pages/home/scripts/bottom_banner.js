document.addEventListener("DOMContentLoaded", function () {
  var closeBanner = document.getElementById("close_banner");
  var bottomBanner = document.getElementById("bottom-banner");

  closeBanner.addEventListener("click", function () {
    bottomBanner.style.display = "none";
  });
});
