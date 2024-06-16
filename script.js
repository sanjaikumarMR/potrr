const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});
document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        const description = project.querySelector('.project-description');

        project.addEventListener('click', function() {
            // Toggle active class on clicked project
            project.classList.toggle('active');

            // Toggle visibility of description
            description.classList.toggle('active');

            // Close other descriptions
            projects.forEach(p => {
                if (p !== project) {
                    p.classList.remove('active');
                    p.querySelector('.project-description').classList.remove('active');
                }
            });
        });
    });
});

