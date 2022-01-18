var hours = document.getElementById('hour');
var minutes = document.getElementById('minute');
var seconds = document.getElementById('second');

function clock() {
    if (new Date().getHours() < 10)
        hours.innerHTML = '0' + new Date().getHours();
    else
        hours.innerHTML = new Date().getHours();
    
    if (new Date().getMinutes() < 10)
        minutes.innerHTML = '0' + new Date().getMinutes();
    else
        minutes.innerHTML = new Date().getMinutes();

    if (new Date().getSeconds() < 10)
        seconds.innerHTML = '0' + new Date().getSeconds();
    else
        seconds.innerHTML = new Date().getSeconds();
    
}

setInterval(clock, 1000)
