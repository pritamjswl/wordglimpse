document.addEventListener('DOMContentLoaded', () => {
  // Toggle theme
  let themeToggler = document.querySelector('#themeToggler');
  const theme = localStorage.getItem('theme');
  if (theme) {
    document.body.setAttribute('data-bs-theme', theme);
    themeToggler.checked = (theme === 'dark');
  }

  themeToggler.addEventListener('change', () => {
    let newTheme = themeToggler.checked ? 'dark' : 'light';
    document.body.setAttribute('data-bs-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
});

function toggleSearch() {
    document.getElementById("searchBox").classList.toggle("sm-hidden");
}