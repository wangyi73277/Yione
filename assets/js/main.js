window.onload = () => {
    showAllProjects();
    setupHoverModeToggle();
  
    document.getElementById('show-arch').addEventListener('click', () => {
      filterProjects('Arch');
    });
  
    document.getElementById('show-arttech').addEventListener('click', () => {
      filterProjects('ArtTech');
    });
  
    document.getElementById('show-all').addEventListener('click', () => {
      showAllProjects();
    });
  };
  