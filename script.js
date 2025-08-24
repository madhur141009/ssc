document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.getElementById('open-sidebar-button');
    const closeButton = document.getElementById('close-sidebar-button');
    const navbar = document.getElementById('navbar');
    const overlay = document.getElementById('overlay');
    const media = window.matchMedia('(max-width: 760px)');

    media.addEventListener('change', updateNavbar);
    updateNavbar(media);

    openButton.addEventListener('click', openSidebar);
    closeButton.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);

    function updateNavbar(e) {
        const isMobile = e.matches;
        if (isMobile) {
            navbar.setAttribute('inert', '');
        } else {
            navbar.removeAttribute('inert');
            navbar.classList.remove('show');
            openButton.setAttribute('aria-expanded', 'false');
        }
    }

    function openSidebar() {
        navbar.classList.add('show');
        openButton.setAttribute('aria-expanded', 'true');
        navbar.removeAttribute('inert');
    }

    function closeSidebar() {
        navbar.classList.remove('show');
        openButton.setAttribute('aria-expanded', 'false');
        navbar.setAttribute('inert', '');
    }
});