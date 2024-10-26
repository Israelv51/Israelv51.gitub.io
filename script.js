function ordenarPizza(event) {
    event.preventDefault();
    const tamano = document.getElementById('tamano').value;
    const especialidad = document.getElementById('especialidad').value;

    // Construir mensaje para WhatsApp
    const mensaje = `Hola, quiero ordenar una ${tamano} de especialidad ${especialidad}.`;
    const url = `https://wa.me/6684631214?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}
