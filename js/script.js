window.addEventListener('DOMContentLoaded', function() {

// Timer:
    let deadline = '2021-07-22';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            s = Math.floor((t/1000) % 60),
            m = Math.floor((t/1000/60) % 60),
            h = Math.floor((t/1000/60/60) % 24),
            d = Math.floor(t/(1000*60*60*24)) + " d";
        
        if (h < 10) {
            h = "0" + h;
        }
        if (m < 10) {
            m = "0" + m;
        }
        if (s < 10) {
            s = "0" + s;
        }

        return {
            'total' : t,
            'days' : d,
            'hours' : h,
            'minutes' : m,
            'seconds' : s
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
                days.textContent = t.days;
                hours.textContent = t.hours;
                minutes.textContent = t.minutes;
                seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }   
        }
    }
    setClock('timer', deadline);
});