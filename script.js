const daysEl =  document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');


futureDate = null;
function f(){
    futureDate = document.getElementById("myDate").value;
    setInterval(countdown, 1000);
}
function countdown(){
    
    const newfutureDate = new Date(futureDate);
    const currentDate = new Date();

    const totseconds = (newfutureDate - currentDate)/1000;

    const days = Math.floor(totseconds/3600/24);
    const hours = Math.floor(totseconds/3600)%24;
    const minutes = Math.floor(totseconds/60)%60;
    const seconds = Math.floor(totseconds)%60;
    
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time<10?`0${time}`:time;
}



