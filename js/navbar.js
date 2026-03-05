const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
        nav.classList.toggle("active");
        document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "";
    });
}

window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (header) header.classList.toggle("rolagem", window.scrollY > 0);
});

//window.addEventListener('scroll', function() {
//    const backgroundImage = document.querySelector('.background-image');
//    const scrollPosition = window.scrollY;

    // Ajusta o zoom baseado na posição de rolagem
//    const zoomLevel = Math.min(120, 100 + scrollPosition / 10); // Máximo de 120%
//    backgroundImage.style.backgroundSize = `${zoomLevel}%`;
//});
