document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const h1 = section.querySelector('h1');
        const sectionPosition = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition && sectionBottom > 0) {
            h1.classList.add('animate__animated', 'animate__bounceInDown');
            h1.style.opacity = 1;
        } else {
            h1.classList.remove('animate__animated', 'animate__bounceInDown');
            h1.style.opacity = 0;
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const section1 = document.querySelector('.section-1');
    const h1T1 = section1.querySelector('h1.t1');
    const h1T2 = section1.querySelector('h1.t2');

    function handleScroll() {
        const rect = section1.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            h1T1.classList.add('animate-welcome');
            h1T2.classList.add('animate-bemvindo');
        } else {
            h1T1.classList.remove('animate-welcome');
            h1T2.classList.remove('animate-bemvindo');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});