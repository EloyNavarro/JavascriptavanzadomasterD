document.addEventListener("DOMContentLoaded", function () {
    fetch("../java/noticias.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el JSON");
            }
            return response.json();
        })
        .then(noticias => {
            let noticiasContainer = document.getElementById("noticias");
            noticias.forEach(noticia => {
                let noticiaDiv = document.createElement("div");
                noticiaDiv.classList.add("noticia");
                noticiaDiv.innerHTML = `
                    <h2>${noticia.titulo}</h2>
                    <p>${noticia.descripcion}</p>
                    <small>${noticia.fecha}</small>
                `;
                noticiasContainer.appendChild(noticiaDiv);
            });
        })
        .catch(error => console.error("Error al cargar noticias:", error));
});