casa1.onclick = mostrarModal;
lightbox.onclick = cerrarModal;

function mostrarModal(evento) {
    lightbox.classList.add("mostrarModal");
}

function cerrarModal() {
    lightbox.classList.remove("mostrarModal");
}