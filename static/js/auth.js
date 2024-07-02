// Get theme from localStorage
document.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
if (theme) {
    document.body.setAttribute('data-bs-theme', theme);
}
});