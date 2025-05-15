function mostrarTexto(boton) {
  const texto = boton.nextElementSibling;
  if (texto.classList.contains("visible")) {
    texto.classList.remove("visible");
    boton.textContent = "Leer más";
  } else {
    texto.classList.add("visible");
    boton.textContent = "Leer menos";
  }
}
window.addEventListener("scroll", function () {
  const boton = document.getElementById("volver-arriba");
  if (window.scrollY > 400) {
    boton.style.display = "block";
  } else {
    boton.style.display = "none";
  }
});

