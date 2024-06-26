document.addEventListener('DOMContentLoaded', () => {
    // Search Toggler
    let searchTogglers = document.querySelectorAll('.searchToggler');
    searchTogglers.forEach(toggler => {
        toggler.addEventListener('click', () => {
            document.querySelector('#searchBox').classList.toggle('d-none');
            document.querySelector('#searchInput').focus();
        });
    });
});
