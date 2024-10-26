let cuponesCanjeados = []; // Almacena los cupones canjeados
let descuentoAplicado = ""; // Variable para guardar el descuento si se canjea un cupón

// Función para canjear cupones
function canjearCupon(event) {
    event.preventDefault(); // Evita que se recargue la página
    const codigoCupon = document.getElementById('codigoCupon').value.trim();
    const mensajeCupon = document.getElementById('mensajeCupon');

    // Verifica si el cupón ya ha sido canjeado
    if (cuponesCanjeados.includes(codigoCupon)) {
        mensajeCupon.innerText = "Este cupón ya ha sido canjeado.";
        mensajeCupon.style.color = "red";
        return;
    }

    // Validar cupones
    if (codigoCupon === "JESUS05" || codigoCupon === "070107") {
        cuponesCanjeados.push(codigoCupon); // Añade el cupón a la lista de canjeados
        descuentoAplicado = codigoCupon === "JESUS05" ? "10%" : "5%";
        mensajeCupon.innerText = `¡Cupón ${codigoCupon} canjeado con éxito! Has recibido un descuento del ${descuentoAplicado} en tu compra.`;
        mensajeCupon.style.color = "green";
    } else {
        mensajeCupon.innerText = "Cupón inválido. Inténtalo de nuevo.";
        mensajeCupon.style.color = "red";
    }
}

// Función para ordenar pizza
function ordenarPizza(event) {
    event.preventDefault();
    const tamano = document.getElementById('tamano').value;
    const especialidad = document.getElementById('especialidad').value;

    // Construir mensaje para WhatsApp
    let mensaje = `Hola, quiero ordenar una ${tamano} de especialidad ${especialidad}.`;

    // Si hay un descuento aplicado, agregarlo al mensaje
    if (descuentoAplicado) {
        mensaje += ` He utilizado un cupón y tengo un descuento del ${descuentoAplicado}.`;
    }

    const url = `https://wa.me/6684631214?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank'); // Abrir WhatsApp
}
