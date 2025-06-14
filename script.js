document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-links a");

    // Efecto de color al pasar el mouse
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#6a1b9a";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#000";
        });
    });

    // Altura del header para compensar en el scroll
    const headerHeight = document.querySelector(".header").offsetHeight;

    // Función de scroll con offset
    function scrollWithOffset(id) {
        const element = document.getElementById(id);
        const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - 10;
        window.scrollTo({ top: y, behavior: "smooth" });
    }

    // Eventos de navegación con desplazamiento ajustado
    document.querySelector('a[href="#acercademi"]').addEventListener("click", function (e) {
        e.preventDefault();
        scrollWithOffset("sobremi");
    });

    document.querySelector('a[href="#habilidades"]').addEventListener("click", function (e) {
        e.preventDefault();
        scrollWithOffset("habilidades");
    });

    document.querySelector('a[href="#proyectos"]').addEventListener("click", function (e) {
        e.preventDefault();
        scrollWithOffset("proyectos");
    });

    document.querySelector('a[href="#contacto"]').addEventListener("click", function (e) {
        e.preventDefault();
        scrollWithOffset("Contactos");
    });
});

document.querySelectorAll('.BTNproyecto').forEach(boton => {
    boton.addEventListener('mouseover', () => {
    boton.classList.add('rotar-3d');
    setTimeout(() => {
        boton.classList.remove('rotar-3d');
    }, 600); 
    });
    });