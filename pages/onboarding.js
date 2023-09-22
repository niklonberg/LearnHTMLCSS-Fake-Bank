const dotsContainer = document.querySelector("#dots");
const dots = document.querySelectorAll(".dot");

dotsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dot")) {
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    event.target.classList.toggle("active");
  }
});
