window.addEventListener('DOMContentLoaded', function() {

// Timer:
    let deadline = '2021-08-22'; // Задаем конечную дату (дедлайн).

    function getTimeRemaining(endtime) {
        // Расчёт оставшегося времени:
        let t = Date.parse(endtime) - Date.parse(new Date()),
            s = Math.floor((t/1000) % 60),
            m = Math.floor((t/1000/60) % 60),
            h = Math.floor((t/1000/60/60) % 24),
            d = Math.floor(t/(1000*60*60*24)) + " d";
        // Добавляем нули в отображение часов, минут, секунд в таймере:
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }
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
        // Прописываем в таймер значения, получаемые ежесекундно:
                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;
        // Если время вышло - обновляем таймер:
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }   
        }
    }
    setClock('timer', deadline);
});