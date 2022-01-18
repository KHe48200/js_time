var h = document.getElementById('timerHour');
var m = document.getElementById('timerMin');
var s = document.getElementById('timerSec');
var button = document.getElementById('startBtn');
var countUp = false;


function startTimer() {

    if (button.innerHTML == 'Start') {

        if (validInput()) {

            interval = setInterval(start, 1000);
            button.innerHTML = 'Pause';

        }

    }
    else {

        pause();

    }
}

function start() {;

    // If user provided time, count down from that.
    // else count up from zero.
    if (timeIsZero())
        countUp = true;


    if (countUp) {
        //count upwards
        s.value++;

        // format seconds
        if (s.value < 10)
            s.value = '0' + s.value;

        // increase minutes by one when seconds reach 60
        if (s.value > 59) {
            s.value = '00';

            m.value++
            // format minutes
            if (m.value < 10)
                m.value = '0' + m.value;
        }

        // increase hours by one when minutes reach 60
        if (m.value > 59) {
            m.value = '00';

            h.value++
            // format hours
            if (h.value < 10)
                h.value = '0' + h.value;
        }
    }

    else {
        // count down
        s.value--;
        // format seconds
        if (s.value < 10)
            s.value = '0' + s.value;

        // decrease minutes by one when seconds reach 0
        if (s.value < '00') {
            s.value = '59';

            m.value--
            // format minutes
            if (m.value < 10)
                m.value = '0' + m.value;
        }

        // decrease hours by one when minutes reach 0
        if (m.value < '00') {
            m.value = '59';

            h.value--
            // format hours
            if (h.value < 10)
                h.value = '0' + h.value;
        }

        if (timeIsZero()) {

            resetTimer();

        }
    }
}


function pause() {

    button.innerHTML = 'Start';
    clearInterval(interval);

}


function timeIsZero() {

    if (h.value == 0 && m.value == 0 && s.value == 0)
        return true;
    else
        return false

}



function resetTimer() {

    pause();

    countUp = false;

    h.value = '00';
    m.value = '00';
    s.value = '00';

}


function validInput() {

    if (h.validity.patternMismatch || m.validity.patternMismatch || s.validity.patternMismatch)
        return false;
    else
        return true;

}