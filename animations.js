let animationPlayed = false; // Flag para verificar se a animação já foi executada

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const h1 = section.querySelector('h1');
        const sectionPosition = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && sectionBottom > 0) {
            // Animação para as seções (excluindo section-1)
            if (section.classList.contains('section-1') && !animationPlayed) {
                h1.classList.add('animate__animated', 'animate__bounceInDown');
                h1.style.opacity = 1;
                animationPlayed = true; // Marca que a animação já foi executada
            } else if (!section.classList.contains('section-1')) {
                h1.classList.add('animate__animated', 'animate__bounceInDown');
                h1.style.opacity = 1;
            }
        } else {
            h1.classList.remove('animate__animated', 'animate__bounceInDown');
            h1.style.opacity = 1;
        }
    });
});

// Este código é executado após o DOM estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    const section1 = document.querySelector('.section-1');
    const h1T1 = section1.querySelector('h1.t1');
    const h1T2 = section1.querySelector('h1.t2');

    // Executa a animação da section-1 ao carregar
    h1T1.classList.add('animate-welcome');
    h1T2.classList.add('animate-bemvindo');
    h1T1.style.opacity = 1;
    h1T2.style.opacity = 1;

    // A função de scroll não precisa ser chamada aqui
    // pois a animação da section-1 já foi executada no carregamento
});
