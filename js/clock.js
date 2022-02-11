const clockI = document.querySelector('#clock');
const dateI = document.querySelector('#date');

function setTime(date){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    clockI.innerText = `${hours}:${minutes}:${seconds}`;
}

function setDate(date){
    const dayText = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    let year = date.getFullYear();
    let month = date.getMonth();
    let date_ = date.getDate();
    let day = date.getDay();

    month = (month+1).toString().padStart(2, '0');
    date_ = date_.toString().padStart(2, '0');
    day = dayText[day];

    dateI.innerText = `${year}.${month}.${date_} (${day})`;
}

function setNow(){
    const date = new Date();
    setTime(date);
    setDate(date);
}

setInterval(setNow, 1000);
setNow();