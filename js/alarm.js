const alarm = document.querySelector('#alarm');
const alarmClockAll = alarm.children[1].children;

const alarmClockBtn0 = alarmClockAll[1].querySelectorAll('button');
const alarmClockBtn1 = alarmClockAll[2].querySelectorAll('button');
const alarmClockBtn2 = alarmClockAll[4].querySelectorAll('button');
const alarmClockBtn3 = alarmClockAll[5].querySelectorAll('button');
const alarmClockBtn4 = alarmClockAll[7].querySelectorAll('button');
const alarmClockBtn5 = alarmClockAll[8].querySelectorAll('button');

const alarmClock0 = alarmClockAll[1].querySelector('h1');
const alarmClock1 = alarmClockAll[2].querySelector('h1');
const alarmClock2 = alarmClockAll[4].querySelector('h1');
const alarmClock3 = alarmClockAll[5].querySelector('h1');
const alarmClock4 = alarmClockAll[7].querySelector('h1');
const alarmClock5 = alarmClockAll[8].querySelector('h1');

const saved_ = document.querySelector("#alarm-saved");

function handleIncrease(event){
    h1 = event.target.parentElement.children[1];
    h1.innerText = (parseInt(h1.innerText) + 1)%10;
}

function handleDecrease(event){
    h1 = event.target.parentElement.children[1];
    h1.innerText = (parseInt(h1.innerText) + 9)%10;
}

function handleIncrease1(event){
    h1 = event.target.parentElement.children[1];
    h1.innerText = (parseInt(h1.innerText) + 1)%6;
}

function handleDecrease1(event){
    h1 = event.target.parentElement.children[1];
    h1.innerText = (parseInt(h1.innerText) + 5)%6;
}

alarmClockBtn0[0].addEventListener("click", handleIncrease);
alarmClockBtn1[0].addEventListener("click", handleIncrease);
alarmClockBtn2[0].addEventListener("click", handleIncrease1);
alarmClockBtn3[0].addEventListener("click", handleIncrease);
alarmClockBtn4[0].addEventListener("click", handleIncrease1);
alarmClockBtn5[0].addEventListener("click", handleIncrease);

alarmClockBtn0[1].addEventListener("click", handleDecrease);
alarmClockBtn1[1].addEventListener("click", handleDecrease);
alarmClockBtn2[1].addEventListener("click", handleDecrease1);
alarmClockBtn3[1].addEventListener("click", handleDecrease);
alarmClockBtn4[1].addEventListener("click", handleDecrease1);
alarmClockBtn5[1].addEventListener("click", handleDecrease);


const alarmStart = document.querySelector("#alarm-start");
const alarmStop = document.querySelector("#alarm-stop");
const alarmStopped = document.querySelector("#alarm-stopped");
const alarmResume = alarmStopped.children[0];
const alarmReset = alarmStopped.children[1];

let alarmTimer = setInterval(alarmGoing, 1000);
clearInterval(alarmTimer);

function alarmGoing(){
    if(saved_.innerText === '0'){
        clearInterval(alarmTimer);
        window.alert("Time over");
        alarmStopped.classList.toggle('hidden');
        alarmStop.classList.toggle('hidden');
        handleAlarmReset();
        return 0;
    }
    saved_.innerText = parseInt(saved_.innerText) - 1;

    const savedNum = saved_.innerText.padStart(6, '0')
    alarmClock0.innerText = savedNum[0];
    alarmClock1.innerText = savedNum[1];
    alarmClock2.innerText = savedNum[2];
    alarmClock3.innerText = savedNum[3];
    alarmClock4.innerText = savedNum[4];
    alarmClock5.innerText = savedNum[5];
}

function handleAlarmStart(){
    alarmClockBtn0[0].classList.toggle("hidden");
    alarmClockBtn1[0].classList.toggle("hidden");
    alarmClockBtn2[0].classList.toggle("hidden");
    alarmClockBtn3[0].classList.toggle("hidden");
    alarmClockBtn4[0].classList.toggle("hidden");
    alarmClockBtn5[0].classList.toggle("hidden");
    alarmClockBtn0[1].classList.toggle("hidden");
    alarmClockBtn1[1].classList.toggle("hidden");
    alarmClockBtn2[1].classList.toggle("hidden");
    alarmClockBtn3[1].classList.toggle("hidden");
    alarmClockBtn4[1].classList.toggle("hidden");
    alarmClockBtn5[1].classList.toggle("hidden");

    alarmClock0.style = 'margin: 70.5px 0 0 0;';
    alarmClock1.style = 'margin: 70.5px 0 0 0;';
    alarmClock2.style = 'margin: 70.5px 0 0 0;';
    alarmClock3.style = 'margin: 70.5px 0 0 0;';
    alarmClock4.style = 'margin: 70.5px 0 0 0;';
    alarmClock5.style = 'margin: 70.5px 0 0 0;';

    alarmStart.classList.toggle('hidden');
    alarmStop.classList.toggle('hidden');

    saved_.innerText = parseInt(alarmClock0.innerText) * 36000 + parseInt(alarmClock1.innerText) * 3600 + parseInt(alarmClock2.innerText) * 600 + parseInt(alarmClock3.innerText) * 60 + parseInt(alarmClock4.innerText) * 10 + parseInt(alarmClock5.innerText) * 1;

    alarmTimer = setInterval(alarmGoing, 1000);
}

function handleAlarmStop(){
    alarmStop.classList.toggle('hidden');
    alarmStopped.classList.toggle('hidden');

    clearInterval(alarmTimer);
}

function handleAlarmResume(){
    alarmStop.classList.toggle('hidden');
    alarmStopped.classList.toggle('hidden');

    alarmTimer = setInterval(alarmGoing, 1000);
}

function handleAlarmReset(){
    alarmStart.classList.toggle('hidden');
    alarmStopped.classList.toggle('hidden');

    alarmClockBtn0[0].classList.toggle("hidden");
    alarmClockBtn1[0].classList.toggle("hidden");
    alarmClockBtn2[0].classList.toggle("hidden");
    alarmClockBtn3[0].classList.toggle("hidden");
    alarmClockBtn4[0].classList.toggle("hidden");
    alarmClockBtn5[0].classList.toggle("hidden");
    alarmClockBtn0[1].classList.toggle("hidden");
    alarmClockBtn1[1].classList.toggle("hidden");
    alarmClockBtn2[1].classList.toggle("hidden");
    alarmClockBtn3[1].classList.toggle("hidden");
    alarmClockBtn4[1].classList.toggle("hidden");
    alarmClockBtn5[1].classList.toggle("hidden");

    alarmClock0.style = 'margin: 0;';
    alarmClock1.style = 'margin: 0;';
    alarmClock2.style = 'margin: 0;';
    alarmClock3.style = 'margin: 0;';
    alarmClock4.style = 'margin: 0;';
    alarmClock5.style = 'margin: 0;';

    saved_.innerText = 0;
    alarmClock0.innerText = '0';
    alarmClock1.innerText = '0';
    alarmClock2.innerText = '0';
    alarmClock3.innerText = '0';
    alarmClock4.innerText = '0';
    alarmClock5.innerText = '0';
}

alarmStart.addEventListener('click', handleAlarmStart);
alarmStop.addEventListener('click', handleAlarmStop);
alarmResume.addEventListener('click', handleAlarmResume);
alarmReset.addEventListener('click', handleAlarmReset);