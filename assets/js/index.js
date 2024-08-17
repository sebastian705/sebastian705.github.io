const enlaces = document.querySelectorAll(".navbar__nav a");
const checkbox = document.querySelector(".navbar__checkbox");

enlaces.forEach(enlace => {
  const id = enlace.dataset.id;
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    scrollSection(id);
    checkbox.checked = false;
  });
});

function scrollSection(id) {
  const element = document.querySelector(id);
  if (element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}