document.addEventListener('DOMContentLoaded', () => {
    const galleryPanels = document.querySelectorAll('.child');
    const overlays = document.querySelectorAll('.overlay-wrap');
    const closeButtons = document.querySelectorAll('.box.close');

    galleryPanels.forEach(panel => {
        panel.addEventListener('click', () => {
            const overlayId = panel.getAttribute('data-overlay');
            const overlay = document.getElementById(overlayId);
            if (overlay) {
                overlay.style.display = 'flex';
                setTimeout(() => {
                    overlay.classList.add('active');
                }, 10); // 약간의 지연을 주어 display 속성 변경 후 transition이 적용되도록 함
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const overlay = button.closest('.overlay-wrap');
            if (overlay) {
                overlay.classList.remove('active');
                overlay.addEventListener('transitionend', () => {
                    overlay.style.display = 'none';
                }, { once: true }); // transition이 끝난 후 display를 none으로 설정
            }
        });
    });
});
