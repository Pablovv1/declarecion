document.addEventListener('DOMContentLoaded', () => {
    const confesionElement = document.querySelector('.confesion');
    const originalText = "No puedo guardarme esto más, quiero que lo sepas: me gustas. y cada día que te veo, me doy cuenta de cuánto más me atraes.❤️";
    let index = 0;

    function type() {
        if (index < originalText.length) {
            confesionElement.textContent = originalText.slice(0, index + 1);
            index++;
            setTimeout(type, 70);
        }
    }

    type();
});

document.getElementById('btn-si').addEventListener('click', function() {
    document.getElementById('respuesta').innerHTML = '¡Sabía que dirías que sí! ❤️<br><span style="font-size: 1.1rem; color: #e75480; margin-top: 0.5rem; display: block;">Se te quiere<span class="beso-animado"> 😘<span class="palabra-besos">🫦​</span></span></span>';
});

const btnNo = document.getElementById('btn-no');

// Función para mover el botón
function moveButton() {
    const btnWidth = btnNo.offsetWidth;
    const btnHeight = btnNo.offsetHeight;
    
    // Detectar si es móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let padding, safeWidth, safeHeight;
    
    if (isMobile) {
        // Para móviles, usar límites más conservadores
        padding = 30;
        safeWidth = window.innerWidth - btnWidth - (padding * 6);
        safeHeight = window.innerHeight - btnHeight - (padding * 6);
    } else {
        // Para desktop, usar los límites originales
        padding = 50;
        safeWidth = window.innerWidth - btnWidth - (padding * 15);
        safeHeight = window.innerHeight - btnHeight - (padding * 15);
    }
    
    // Asegurar que los límites sean válidos
    safeWidth = Math.max(0, safeWidth);
    safeHeight = Math.max(0, safeHeight);
    
    // Generar posición aleatoria en el área segura
    const randomX = Math.floor(Math.random() * safeWidth) + padding;
    const randomY = Math.floor(Math.random() * safeHeight) + padding;
    
    // Aplicar posición
    btnNo.style.position = 'fixed';
    btnNo.style.left = randomX + 'px';
    btnNo.style.top = randomY + 'px';
    btnNo.style.zIndex = '1000';
}

// Detectar si es móvil
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
    // Para móviles, usar eventos touch
    btnNo.addEventListener('touchstart', function(e) {
        e.preventDefault();
        moveButton();
    });
    
    btnNo.addEventListener('touchend', function(e) {
        e.preventDefault();
        moveButton();
    });
} else {
    // Para desktop, usar eventos de mouse
    btnNo.addEventListener('mouseenter', moveButton);
}

btnNo.addEventListener('click', function(e) {
    e.preventDefault();
    // No hace nada al hacer click
}); 