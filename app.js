const blob = document.getElementById("blob");

document.body.addEventListener("pointermove", (event) => {
  const { clientX, clientY } = event;

  blob.style.left = `${clientX}px`;
  blob.style.top = `${clientY}px`;

  const hue = (clientX / window.innerWidth) * 360;
  blob.style.background = `linear-gradient(to right, hsl(${hue}, 100%, 50%), hsl(${hue + 180}, 100%, 50%))`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
}, {
  rootMargin: "0px 0px 100px 0px", // adjust the margin to your liking
  threshold: 0.5, // adjust the threshold to your liking
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));