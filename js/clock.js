const clock = document.querySelector('#clock');
console.log(clock);

function getTime(){
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(getTime, 1000);
getTime();