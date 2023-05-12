document.addEventListener("DOMContentLoaded", () => {
  const handsomeImage = document.getElementById("handsome");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scale = Math.max(0.5, 1 - scrollTop / 1000);

    handsomeImage.style.transform = `scale(${scale}) rotate(${
      scrollTop / 20
    }deg)`;
  });
});

window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll("[data-animate]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  animatedElements.forEach((element) => {
    const delay = element.getAttribute("data-delay");
    element.style.transitionDelay = delay;
    element.classList.add("animate");
    observer.observe(element);
  });
});
