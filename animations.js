let animationPlayed = false;

document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const h1 = section.querySelector('h1');
        const sectionPosition = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && sectionBottom > 0) {
            if (section.classList.contains('section-1') && !animationPlayed) {
                h1.classList.add('animate__animated', 'animate__bounceInDown');
                h1.style.opacity = 1;
                animationPlayed = true;
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

document.addEventListener('DOMContentLoaded', function() {
    const section1 = document.querySelector('.section-1');
    const h1T1 = section1.querySelector('h1.t1');
    const h1T2 = section1.querySelector('h1.t2');

    h1T1.classList.add('animate-welcome');
    h1T2.classList.add('animate-bemvindo');
    h1T1.style.opacity = 1;
    h1T2.style.opacity = 1;
});
