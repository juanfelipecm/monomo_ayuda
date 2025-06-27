document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.sidebar-section');

  sections.forEach(section => {
    const header = section.querySelector('h2');
    if (!header) return;

    header.addEventListener('click', () => {
      sections.forEach(s => {
        if (s !== section) {
          s.classList.remove('open');
        }
      });
      section.classList.toggle('open');
    });
  });
});
