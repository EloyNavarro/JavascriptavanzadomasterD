document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.getElementById('formularioPresupuesto');
  const producto = document.getElementById('producto');
  const plazo = document.getElementById('plazo');
  const extras = document.querySelectorAll('.extra');
  const total = document.getElementById('total');

  function calcularPresupuesto() {
    let base = parseFloat(producto.value);
    let descuento = parseInt(plazo.value) > 3 ? 0.9 : 1;
    let extrasTotal = 0;

    extras.forEach(extra => {
      if (extra.checked) {
        extrasTotal += parseFloat(extra.value);
      }
    });

    const presupuestoFinal = (base + extrasTotal) * descuento;
    total.value = presupuestoFinal.toFixed(2) + ' €';
  }

  function validarTexto(input, maxLength) {
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    return regex.test(input.value) && input.value.length <= maxLength;
  }

  function validarTelefono(input) {
    return /^[0-9]{9}$/.test(input.value);
  }

  formulario.addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById('apellidos');
    const telefono = document.getElementById('telefono');
    const email = document.getElementById('email');
    const condiciones = document.getElementById('condiciones');

    if (
      !validarTexto(nombre, 15) ||
      !validarTexto(apellidos, 40) ||
      !validarTelefono(telefono) ||
      !email.checkValidity() ||
      !condiciones.checked
    ) {
      e.preventDefault();
      alert("Por favor, revisa que todos los datos sean correctos y hayas aceptado las condiciones.");
    }
  });


  producto.addEventListener('change', calcularPresupuesto);
  plazo.addEventListener('input', calcularPresupuesto);
  extras.forEach(extra => extra.addEventListener('change', calcularPresupuesto));


  calcularPresupuesto();
});