window.addEventListener('scroll', revealProjects);

function revealProjects() {
    var projects = document.querySelectorAll('.project');

    for (var i = 0; i < projects.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = projects[i].getBoundingClientRect().top;
        var elementVisible = 150; // Adjust based on when you want the project to become visible

        if (elementTop < windowHeight - elementVisible) {
            projects[i].classList.add('active');
        } else {
            projects[i].classList.remove('active');
        }
    }
}

revealProjects(); // Call on initial load in case projects are in view initially
