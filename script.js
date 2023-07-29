var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var sm = document.getElementById('study_minutes');
var ss = document.getElementById('study_seconds');

var bm = document.getElementById('break_minutes');
var bs = document.getElementById('break_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function(){
    sm.innerText = 25;
    ss.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function(){
    stopInterval()
    startTimer = undefined;
})


//Start Timer Function
function timer(){
    //Work Timer Countdown
    if(ss.innerText != 0){
        ss.innerText--;
    } else if(sm.innerText != 0 && ss.innerText == 0){
        ss.innerText = 59;
        sm.innerText--;
    }

    //Break Timer Countdown
    if(sm.innerText == 0 && ss.innerText == 0){
        if(bs.innerText != 0){
            bs.innerText--;
        } else if(bm.innerText != 0 && bs.innerText == 0){
            bs.innerText = 59;
            bm.innerText--;
        }
    }

    //Increment Counter by one if one full cycle is completed
    if(sm.innerText == 0 && ss.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
        sm.innerText = 25;
        ss.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);
}