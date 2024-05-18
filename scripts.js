document.addEventListener('DOMContentLoaded', function () {
    const filterInput = document.getElementById('filter');
    const projectList = document.getElementById('project-list');
    const projects = projectList.getElementsByTagName('li');

    filterInput.addEventListener('keyup', function () {
        const filterValue = filterInput.value.toLowerCase();

        for (let i = 0; i < projects.length; i++) {
            const project = projects[i];
            const tech = project.getAttribute('data-tech').toLowerCase();
            if (tech.includes(filterValue)) {
                project.style.display = '';
            } else {
                project.style.display = 'none';
            }
        }
    });
});