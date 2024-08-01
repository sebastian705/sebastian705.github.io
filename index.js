const enlaces = document.querySelectorAll(".navegacion a");
const hamburguesa = document.querySelector(".btn-hamburguesa");
const navegacion = document.querySelector(".navegacion");

enlaces.forEach(enlace => {
  const id = enlace.dataset.id;
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    scrollSection(id);
    navegacion.classList.remove("show");
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
hamburguesa.addEventListener('click', (e) => {
  navegacion.classList.toggle("show");
})