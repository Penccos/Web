// Función para cambiar el idioma
function changeLanguage(language) {
    const contentEn = document.querySelectorAll('.content.en');
    const contentEs = document.querySelectorAll('.content.es');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Cambiar el texto de los enlaces de navegación
    navLinks.forEach(link => {
        const textEn = link.getAttribute('data-en');
        const textEs = link.getAttribute('data-es');
        link.textContent = language === 'en' ? textEn : textEs;
    });

    // Mostrar y ocultar contenido según el idioma seleccionado
    const showContent = language === 'en' ? contentEn : contentEs;
    const hideContent = language === 'en' ? contentEs : contentEn;

    // Mostrar contenido en el idioma seleccionado
    showContent.forEach(element => (element.style.display = 'block'));
    // Ocultar contenido del idioma no seleccionado
    hideContent.forEach(element => (element.style.display = 'none'));
}

// Función para habilitar el desplazamiento suave entre anclajes
function enableSmoothScroll() {
    const navLinks = document.querySelectorAll('nav ul li a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }
        });
    });
}

// Función para alternar el menú de navegación en móviles
function toggleMenu() {
    const menu = document.querySelector('.menu');
    const languageButtons = document.querySelector('.language-buttons');
    menu.classList.toggle('open'); // Alterna la clase para mostrar/ocultar el menú

    // Desplazar los botones de idioma cuando el menú está abierto
    if (menu.classList.contains('open')) {
        languageButtons.style.right = 'calc(20px + 240px)'; // Ajusta la posición de los botones
    } else {
        // Vuelve a la posición original
        languageButtons.style.right = '80px'; // Aquí se pone el valor original que definiste
    }
}

// Función para cerrar el menú cuando se hace clic fuera de él
function closeMenuOnOutsideClick(event) {
    const menu = document.querySelector('.menu');
    const menuIcon = document.querySelector('.menu-icon');
    const languageButtons = document.querySelector('.language-buttons');
    
    // Verifica si el clic fue fuera del menú y del icono del menú
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('open'); // Cierra el menú

        // Vuelve a la posición original de los botones de idioma
        languageButtons.style.right = '80px'; // Vuelve a la posición original
    }
}

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('en');  // Establece el idioma inicial en inglés
    enableSmoothScroll();  // Habilita el desplazamiento suave

    // Escucha para detectar clics fuera del menú
    document.addEventListener('click', closeMenuOnOutsideClick);
});

// Carrusel fotos

const btnLeft = document.querySelector(".btn-left"),
    btnRight = document.querySelector(".btn-right"),
    slider = document.querySelector("#slider"),
    sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 3000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   

// Extender imágenes de la galería

// Obtener todos los elementos de las imágenes en la galería
const images = document.querySelectorAll('.gallery-img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');

// Función para abrir el lightbox
images.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.style.display = 'flex'; // Mostrar el lightbox
        lightboxImg.src = image.src; // Establecer la imagen en el lightbox
    });
});

// Función para cerrar el lightbox
closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none'; // Ocultar el lightbox
});

// Cerrar el lightbox si se hace clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none'; // Ocultar el lightbox
    }
});


