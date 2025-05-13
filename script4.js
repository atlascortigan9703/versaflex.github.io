// Add scroll animation (just example of JS usage)
window.addEventListener("scroll", () => {
  const boxes = document.querySelectorAll(".feature-box");
  boxes.forEach((box, index) => {
    const rect = box.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      box.style.opacity = 1;
      box.style.transform = "translateY(0)";
    } else {
      box.style.opacity = 0;
      box.style.transform = "translateY(50px)";
    }
  });
});
