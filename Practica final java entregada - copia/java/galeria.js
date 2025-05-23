document.addEventListener("DOMContentLoaded", function () {
  const imagenes = [
    "../images/0ca0ba60-59da-4aa4-9641-71057fb3c8dd.jpeg",
    "../images/mejor-hamburguesa-de-espana-2025-em2-elle-gourmet-1-67d1689a2816c.png",
    "../images/Pizza-3007395.jpg",
    "../images/spaguetti-carbonara.jpg",
    "../images/RGLGI5MIQNKPRDKGYTN2LAPDOE.avif",
    "../images/descarga.jpeg",
    "../images/receta-vitello-tonnato-ternera.webp",
    "../images/risotto_de_esparragos_con_parmesano_10b0b48e_1280x720.jpg",
    "../images/THUMB-VIDEO_rev1-1-6.avif",
    "../images/1366_2029.jpg",
    "../images/images.jpeg",
  ];

 
  const galeria = document.getElementById("galeria");
  const modal = document.getElementById("modal");
  const imagenAmpliada = document.getElementById("imagen-ampliada");
  const btnSiguiente = document.getElementById("siguiente");
  const btnAnterior = document.getElementById("anterior");

  let indiceActual = 0;

  galeria.innerHTML = "";

  imagenes.forEach((ruta, index) => {
    const img = document.createElement("img");
    img.src = ruta;
    img.alt = "Imagen de galería";
    img.classList.add("imagen-galeria");

    img.addEventListener("click", function () {
      indiceActual = index;
      abrirModal();
    });

    galeria.appendChild(img);
  });

  function abrirModal() {
    modal.style.display = "flex";
    imagenAmpliada.src = imagenes[indiceActual];
  }

  function cerrarModal() {
    modal.style.display = "none";
  }

  function mostrarSiguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    abrirModal();
  }

  function mostrarAnterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    abrirModal();
  }

  btnSiguiente.addEventListener("click", mostrarSiguiente);
  btnAnterior.addEventListener("click", mostrarAnterior);

  modal.addEventListener("click", function (e) {
    if (e.target.id === "modal") {
      cerrarModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (modal.style.display === "flex") {
      if (e.key === "ArrowRight") mostrarSiguiente();
      if (e.key === "ArrowLeft") mostrarAnterior();
      if (e.key === "Escape") cerrarModal();
    }
  });
});