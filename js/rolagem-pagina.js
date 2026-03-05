// rolagem-pagina.js
document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal');

    function revealOnScroll() {
        for (let element of revealElements) {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('show');
            }
        }
    }

    // Executa a função imediatamente ao carregar a página
    revealOnScroll();

    // Executa a função também durante o scroll
    window.addEventListener('scroll', revealOnScroll);
});
