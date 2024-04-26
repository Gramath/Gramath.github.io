document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.5  // Adjust if necessary to ensure elements are half visible before triggering
    });

    // Target all the elements you want to observe
    document.querySelectorAll('.project').forEach(project => {
        observer.observe(project);
    });
});
