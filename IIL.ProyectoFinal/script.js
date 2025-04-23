// Funcionalidad para añadir productos al carrito
function agregarAlCarrito(producto) {
    alert(`${producto} ha sido añadido al carrito.`);
}

// Validación del formulario de reservación
document.getElementById("form-reservacion").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre-reserva").value;
    const email = document.getElementById("email-reserva").value;
    const fechaHora = document.getElementById("fecha-hora").value;
    const personas = document.getElementById("personas").value;

    if (!nombre || !email || !fechaHora || !personas) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validación de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    alert("Tu reserva ha sido registrada.");
    document.getElementById("form-reservacion").reset();
});

// Validación del formulario de contacto
document.getElementById("form-contacto").addEventListener("submit", function (event) {
    event.preventDefault();

    const nombreContacto = document.getElementById("nombre-contacto").value;
    const emailContacto = document.getElementById("email-contacto").value;
    const mensaje = document.getElementById("mensaje").value;

    if (!nombreContacto || !emailContacto || !mensaje) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validación de correo electrónico
    if (!emailPattern.test(emailContacto)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    alert("Tu mensaje ha sido enviado.");
    document.getElementById("form-contacto").reset();
});

// Modo claro
let modoClaro = false;
let btn=document.getElementById("modo-oscuro")
document.getElementById("modo-oscuro").addEventListener("click", function () {
    if (modoClaro) {
        document.documentElement.classList.remove("modo-claro");
        modoClaro = false;
    } else {
        document.documentElement.classList.add("modo-claro");
        modoClaro = true;
    }
    
    document.documentElement.classList.toggle("modo-claro");
    btn.textContent = !modoClaro ? "Modo Oscuro" : "Modo Claro";
});



// Contador de visitas
let contadorVisitas = localStorage.getItem("contadorVisitas") || 0;
contadorVisitas++;
localStorage.setItem("contadorVisitas", contadorVisitas);
document.getElementById("contador-visitas").textContent = `Número de visitas: ${contadorVisitas}`;
