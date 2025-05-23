document.addEventListener("DOMContentLoaded", function() {
    const botonesAgregar = document.querySelectorAll(".agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", function() {
            alert("Platillo agregado al pedido 🛒");
        });
    });
});
