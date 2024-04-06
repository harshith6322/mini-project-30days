const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeclass();
    panel.classList.add("active");
  });
});

function removeclass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
