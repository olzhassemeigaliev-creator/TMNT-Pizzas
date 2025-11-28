// --- 1. Логика для динамического обновления времени и даты ---
function updateTimeAndDate() {
    const now = new Date();
    
    // Форматирование времени (ЧЧ:ММ:СС)
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Форматирование даты (ДД.ММ.ГГГГ)
    const dateString = now.toLocaleDateString('ru-RU'); 
    
    // Обновляем элемент на странице
    const timeDateElement = document.getElementById('current-time-date');
    if (timeDateElement) {
        timeDateElement.textContent = `${timeString} | ${dateString}`;
    }
}

// Вызываем функцию один раз, чтобы показать время сразу
updateTimeAndDate(); 

// Обновляем время каждую секунду
setInterval(updateTimeAndDate, 1000);


// --- 2. Логика для модального окна (Home) ---
const modal = document.getElementById('modal-home');
const btn = document.getElementById('open-modal-btn');
const closeBtn = document.getElementsByClassName('close-btn')[0];

if (btn && modal && closeBtn) {
    btn.onclick = function(event) {
        event.preventDefault(); 
        modal.style.display = 'block';
    }

    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}



// --- 3. Логика для кнопки, открывающей видео на YouTube ---
document.addEventListener("DOMContentLoaded", () => {
    const playBtn = document.querySelector('.join-us-video-play-button');

    if (playBtn) {
        playBtn.addEventListener('click', function () {
            window.open(
              'https://www.youtube.com/watch?v=3xadsYmtDRI&list=PLWeiDeQ-R249XK4KI4CymzabCVqqYEuUV&index=2',
              '_blank'
            );
        });
    }
});
