document.addEventListener('DOMContentLoaded', () => {
    // Search Toggler
    let searchTogglers = document.querySelectorAll('.searchToggler');
    searchTogglers.forEach(toggler => {
        toggler.addEventListener('click', () => {
            document.querySelector('#searchBox').classList.toggle('d-none');
            document.querySelector('#searchInput').focus();
        });
    });
    // Theme Toggler
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
    // Count the letters in upload content
    let uploadContent = document.querySelector('#uploadContent');
    uploadContent.addEventListener('input', () => {
        document.querySelector('#letterCount').innerHTML = uploadContent.value.length;
    });
    // Enable swiper
    var swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        mousewheelControl: true,
        slidesPerView: 1,
        freeMode: true,
        freeModeSticky: true,
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
      });
});
