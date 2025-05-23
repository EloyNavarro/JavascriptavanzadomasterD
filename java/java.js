fetch("data/noticias.json")
  .then(response => response.json())
  .then(data => {
    let noticiasHTML = "";
    data.forEach(noticia => {
      noticiasHTML += `<article><h3>${noticia.titulo}</h3><p>${noticia.contenido}</p></article>`;
    });
    document.getElementById("noticias").innerHTML = noticiasHTML;
  })
  .catch(error => console.error("Error cargando noticias:", error));