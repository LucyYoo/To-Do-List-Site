const $loading = document.querySelector('.loading');
const html = document.querySelector('html');

html.style.overflow = 'hidden'

window.addEventListener('load', () => {
    $loading.style.opacity = 0;
    html.style.overflow = 'auto';
    setTimeout(() => {
        $loading.style.display = 'none';
    }, 100);
})