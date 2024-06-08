document.addEventListener('DOMContentLoaded', () => {
    // Open search box
    let searchBtn = document.querySelector('#searchBtn');
    searchBtn.addEventListener('click', () => {
        let searchForm = document.querySelector('#searchForm');
        searchForm.classList.toggle('sm-hidden');
    });
});
