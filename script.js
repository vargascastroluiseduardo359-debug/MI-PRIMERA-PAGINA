document.addEventListener('DOMContentLoaded', () => {
    
    // =======================================
    // 1. Lógica del Carrusel (Transiciones)
    // =======================================
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let autoTransitionInterval;

    // Función para mostrar el slide actual
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    // Navegar al slide anterior
    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    // Navegar al siguiente slide
    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    // Auto-transición cada 5 segundos
    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 5000);

    // Iniciar el carrusel
    showSlide(currentSlide);


    // =======================================
    // 2. Lógica del Modal de Login
    // =======================================
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.modal-content .close-btn');
    const loginForm = document.getElementById('login-form');

    // Abre el modal al hacer clic en el botón de "Iniciar Sesión"
    loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
    });

    // Cierra el modal al hacer clic en la 'x'
    closeBtn.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });

    // Cierra el modal al hacer clic fuera de él
    window.addEventListener('click', (event) => {
        if (event.target === loginModal) {
            loginModal.style.display = 'none';
        }
    });

    // Simulación de Login (solo valida y oculta)
    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('¡Inicio de Sesión Exitoso! Bienvenido, jugador.');
        loginModal.style.display = 'none';
        // Aquí podrías cambiar el texto del botón de login a "Cerrar Sesión"
        loginBtn.textContent = 'Perfil (Logged In)';
    });


    // =======================================
    // 3. Lógica de la Caja de Comentarios
    // =======================================
    const commentForm = document.getElementById('comment-form');
    const commentsList = document.getElementById('comments-list');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();
         let area=document.getElementById('comment-text');
        const user = document.getElementById('comment-user').value;
        const text = document.getElementById('comment-text').value;
        area.style.resize = "none";

        if (user && text) {
            // Crear el nuevo elemento de comentario
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            
            // Usamos un template literal para estructurar el comentario
            newComment.innerHTML = `
                <p><strong>${user} (Recién llegado):</strong> ${text}</p>
                <small>${new Date().toLocaleTimeString()}</small>
            `;

            // Añadir el nuevo comentario al inicio de la lista
            commentsList.prepend(newComment); 

            // Limpiar el formulario para la siguiente jugada
            commentForm.reset();
        } else {
            alert('¡El Nickname y el Mensaje son obligatorios para publicar!');
        }
    });
});
