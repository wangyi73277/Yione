function setupHoverModeToggle() {
    const archProjects = document.querySelectorAll('.Arch');
    const artTechProjects = document.querySelectorAll('.ArtTech');
  
    archProjects.forEach(project => {
      project.addEventListener('mouseenter', () => {
        document.body.classList.remove('dark-mode');
        document.querySelector('.light-mode-logo').style.display = 'inline';
        document.querySelector('.dark-mode-logo').style.display = 'none';
      });
    });
  
    artTechProjects.forEach(project => {
      project.addEventListener('mouseenter', () => {
        document.body.classList.add('dark-mode');
        document.querySelector('.light-mode-logo').style.display = 'none';
        document.querySelector('.dark-mode-logo').style.display = 'inline';
      });
    });
  }
  