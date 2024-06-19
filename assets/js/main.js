const sideBarCloseButton = document.getElementById('close-btn');
const openMenuButton = document.getElementById('menu-btn');

sideBarCloseButton.addEventListener('click', e => {
    document.getElementById('sidebar').classList.add('hidden');
})

openMenuButton.addEventListener('click', e => {
    document.getElementById('sidebar').classList.remove('hidden');
})