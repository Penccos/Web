
//FUNCIÓN BOTÓN

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("enter-button");
    const houseName = document.getElementById("house-name");

    button.addEventListener("mouseover", function () {
        button.textContent = "Bienvenido";
        houseName.textContent = "La Finca Cuesta de Patas"
    });

    button.addEventListener("mouseout", function () {
        button.textContent = "Welcome";
        houseName.textContent = "Cuesta de Patas Luxury Estate"
    });
});

//FUNCIÓN CARRUSEL

document.addEventListener("DOMContentLoaded", function () {
    let slides = document.querySelectorAll(".carousel .slide");
    let currentSlide = 0;
    let intervalTime = 2500; // 5 segundos por imagen
    let maxSlides = slides.length;
    
    function showSlide(index) {
        // Ocultar todas las imágenes
        slides.forEach(slide => slide.style.opacity = "0");

        // Mostrar la imagen actual
        slides[index].style.opacity = "1";
    }

    function nextSlide() {
        if (currentSlide < maxSlides - 1) { // Se detiene en la última imagen
            currentSlide++;
            showSlide(currentSlide);
            setTimeout(nextSlide, intervalTime);
        }
    }

    // Mostrar la primera imagen al inicio y empezar la animación
    showSlide(currentSlide);
    setTimeout(nextSlide, intervalTime);
});
