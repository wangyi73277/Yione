function filterProjects(category) {
    const projects = document.querySelectorAll('.Arch, .ArtTech');
    projects.forEach(project => {
      const wrapper = project.closest('.col-12');
      wrapper.style.display = project.classList.contains(category) ? 'block' : 'none';
    });
  }
  
  function showAllProjects() {
    document.querySelectorAll('.Arch, .ArtTech').forEach(project => {
      project.closest('.col-12').style.display = 'block';
    });
  }
  