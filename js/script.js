// Funcionalidad para el modal de imágenes
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImage");
            const closeBtn = document.querySelector(".close-modal");
            
            // Agregar evento de clic a todas las imágenes
            const allImages = document.querySelectorAll('.photo-container img');
            allImages.forEach(img => {
                img.addEventListener('click', function() {
                    modal.classList.add('show');
                    modalImg.src = this.src;
                    document.body.style.overflow = "hidden"; // Prevenir scroll
                });
            });
            
            // Cerrar modal
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('show');
                document.body.style.overflow = "auto"; // Restaurar scroll
            });
            
            // Cerrar modal al hacer clic fuera de la imagen
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = "auto";
                }
            });
            
            // Cerrar modal con tecla ESC
            document.addEventListener('keydown', function(e) {
                if (e.key === "Escape" && modal.classList.contains('show')) {
                    modal.classList.remove('show');
                    document.body.style.overflow = "auto";
                }
            });
        });