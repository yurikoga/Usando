const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    // Efeito visual ao clicar
    key.addEventListener('mousedown', () => {
        key.classList.remove('neu-raised');
        key.classList.add('neu-pressed');
    });

    key.addEventListener('mouseup', () => {
        key.classList.remove('neu-pressed');
        key.classList.add('neu-raised');
    });

    key.addEventListener('mouseleave', () => {
        key.classList.remove('neu-pressed');
        key.classList.add('neu-raised');
    });

    // Ação de clique
    key.addEventListener('click', () => {
        console.log("Tecla pressionada:", key.getAttribute('data-key'));
    });
});

// Adiciona suporte ao teclado físico para brilhar na tela
document.addEventListener('keydown', (e) => {
    const k = e.key.toLowerCase();
    const target = document.querySelector(`[data-key="${k}"]`);
    if(target) {
        target.classList.remove('neu-raised');
        target.classList.add('neu-pressed');
    }
});

document.addEventListener('keyup', (e) => {
    const k = e.key.toLowerCase();
    const target = document.querySelector(`[data-key="${k}"]`);
    if(target) {
        target.classList.remove('neu-pressed');
        target.classList.add('neu-raised');
    }
});
