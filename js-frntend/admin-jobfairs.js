function toggleContent() {
    const moreContent = document.querySelector('.more-content');
    const button = document.querySelector('#loadmoreBtn');
    
    if (!moreContent.classList.contains('show')) {
        moreContent.classList.add('show');
        button.textContent = 'See Less...';
    } else {
        moreContent.classList.remove('show');
        button.textContent = 'Load More';
    }
}

function openModal() {
    const modalBackdrop = document.getElementById('modalbackdrop');
    modalBackdrop.classList.add('visible');
}

function closeModal() {
    const modalBackdrop = document.getElementById('modalbackdrop')
    modalBackdrop.classList.remove('visible');
}



document.querySelectorAll('.fa-ellipsis-v').forEach((icon) => {
    icon.addEventListener('click', (e) => {
        // Close other open menus first
        document.querySelectorAll('.ellipsis-setting.visible').forEach((menu) => {
            menu.classList.remove('visible');
        });

        // Toggle visibility for the current one
        const ellipsisMenu = e.target.closest('.job-op').querySelector('.ellipsis-setting');
        ellipsisMenu.classList.toggle('visible');

        // Close menu if user clicks outside
        document.addEventListener('click', (event) => {
            if (!ellipsisMenu.contains(event.target) && !icon.contains(event.target)) {
                ellipsisMenu.classList.remove('visible');
            }
        }, { once: true });
    });
});
