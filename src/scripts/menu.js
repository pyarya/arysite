// burger menu interaction

document.querySelector('.burgermenu')?.addEventListener('click', () => {
    document.querySelector('.nav-links , .alt-links')?.classList.toggle('expanded');
});

