document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').substring(1) === entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {rootMargin: '-50% 0px -50% 0px'}); // Adjust rootMargin as needed to change when the active class is applied

    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
});