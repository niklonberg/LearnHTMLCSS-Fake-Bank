const slider = document.querySelector("#slider");
const dotsContainer = document.querySelector("#dots");
const dots = document.querySelectorAll("#dots .dot");

dotsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    event.target.classList.add("active");
  }
});

slider.addEventListener("scroll", () => {
  const visibleSlideIndex = Math.round(slider.scrollLeft / slider.clientWidth);
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[visibleSlideIndex].classList.add("active");
});
