const watch = document.querySelector('#watch');
const saved = document.querySelector('#saved');
const recordList = document.querySelector('#record-list');

const started = document.querySelector('#started');
const stopped = document.querySelector('#stopped');

const startedBtns = started.querySelectorAll('input');
const stoppedBtns = stopped.querySelectorAll('input');

const startBtn = document.querySelector('#stopwatch-btn > input');
const stopBtn = startedBtns[0];
const recordBtn = startedBtns[1];
const resumeBtn = stoppedBtns[0];
const resetBtn = stoppedBtns[1];

let flag = false;
var timer = setInterval(timeGoing, 10)
clearInterval(timer)

function numToTime(n){
    const minutes = Math.floor(n/(60*100)).toString().padStart(2, '0');
    const seconds = Math.floor((n/100)%60).toString().padStart(2, '0');
    const milliseconds = Math.floor(n%100).toString().padStart(2, '0');

    return `${minutes}:${seconds}.${milliseconds}`
}

function timeGoing(){
    const saved = document.querySelector('#saved');
    const flowTime = parseInt(saved.textContent) + 1;
    const time = numToTime(flowTime);

    saved.textContent = flowTime;
    watch.innerText = time;
}

function handleStart(){
    timer = setInterval(timeGoing, 10);
    startBtn.classList.toggle('hidden');
    started.classList.toggle('hidden');
};

function handleStop(){
    clearInterval(timer)
    started.classList.toggle('hidden');
    stopped.classList.toggle('hidden');
}

function handleResume(){
    timer = setInterval(timeGoing, 10);
    started.classList.toggle('hidden');
    stopped.classList.toggle('hidden');
}

function handleReset(){
    const saved = document.querySelector('#saved');

    startBtn.classList.toggle('hidden');
    stopped.classList.toggle('hidden');

    saved.innerText = 0;
    watch.innerText = `00:00.00`;

    while(recordList.hasChildNodes()){
        recordList.removeChild(recordList.firstChild);
    }
}

function handleRecord(){
    const saved = document.querySelector('#saved');

    li = document.createElement('li');
    li.innerText = numToTime(parseInt(saved.textContent));
    recordList.appendChild(li);
    recordList.scrollTop = recordList.scrollHeight;
}

startBtn.addEventListener('click', handleStart);
stopBtn.addEventListener('click', handleStop);
resumeBtn.addEventListener('click', handleResume);
resetBtn.addEventListener('click', handleReset);
recordBtn.addEventListener('click', handleRecord);