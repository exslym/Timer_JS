window.addEventListener('DOMContentLoaded', function() {

// Timer:
    let deadline = '2022-07-20'; // Задаем конечную дату (дедлайн).

    function getTimeRemaining(endtime) {
        // Расчёт оставшегося времени:
        let t = Date.parse(endtime) - Date.parse(new Date()),
            s = Math.floor((t/1000) % 60),
            m = Math.floor((t/1000/60) % 60),
            h = Math.floor((t/1000/60/60) % 24),
            d = Math.floor(t/(1000*60*60*24)) + " d";
        
        // Возвращаем полученные значения:
        return {
            'total' : t,
            'days' : d,
            'hours' : h,
            'minutes' : m,
            'seconds' : s
        };
    }

    function setClock(id, endtime) {
        // Вводим переменные, находим в документе элементы по селектору:
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
        // Устанавливаем обновление таймера каждую секунду:
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
        // Добавляем нули в отображение часов, минут, секунд в таймере:
            function addZero(num) {
                if (num < 10) {
                    return '0' + num;
                } else {
                    return num;
                }
            }            
        // Прописываем в таймер значения, получаемые ежесекундно:
            days.textContent = t.days;
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
        // Если время вышло - обновляем таймер:
            if (t.total <= 0) {
                clearInterval(timeInterval);
                days.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }   
        }
    }
    setClock('timer', deadline);
});