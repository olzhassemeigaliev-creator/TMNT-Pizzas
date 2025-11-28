<script>
    function updateTimeAndDate() {
        const now = new Date();
        
        // Форматирование времени (ЧЧ:ММ:СС)
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        
        // Форматирование даты (ДД.ММ.ГГГГ)
        const dateString = now.toLocaleDateString('ru-RU'); 
        
        // Объединяем и обновляем элемент
        document.getElementById('current-time-date').textContent = `${timeString} | ${dateString}`;
    }

    // Вызываем функцию один раз, чтобы показать время сразу
    updateTimeAndDate(); 

    // Обновляем время каждую секунду (1000 миллисекунд)
    setInterval(updateTimeAndDate, 1000);
    
</script>