<script>
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');
    const closeBtn = document.querySelector('.modal-close');

    // Selecciona todas las imágenes dentro de las tarjetas
    document.querySelectorAll('.card-image img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex'; // Muestra la modal
            modalImg.src = this.src;     // Asigna la misma ruta de la imagen clickeada
        });
    });

    // Función para cerrar la modal al hacer clic en la 'X'
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar también si el usuario hace clic fuera de la imagen (en el fondo oscuro)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
</script>