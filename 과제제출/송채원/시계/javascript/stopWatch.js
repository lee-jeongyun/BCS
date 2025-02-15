const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const continueBtn = document.querySelector(".continue");
const resetBtn = document.querySelector(".reset");
const visualTime = document.querySelector(".visualTime");

startBtn.addEventListener("click", startBtnClicked);
stopBtn.addEventListener("click", stopBtnClicked);
continueBtn.addEventListener("click", continueBtnClicked);
resetBtn.addEventListener("click", resetBtnClicked);

let timerId;
let time = 0;
let min, sec, msec;

function startBtnClicked(){
    startBtn.classList.add(HIDDEN);
    stopBtn.classList.remove(HIDDEN);
    resetBtn.classList.remove(HIDDEN);
    continueBtn.classList.add(HIDDEN);
    timerId = setInterval(printTime, 10);
}

function changeTime(){
    min = parseInt(String(time / (60*100)));
    sec = parseInt(String((time-(min * 60 * 100)) / 100));
    msec = time % 100;

    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}:${String(msec).padStart(2, '0')}`
}

function printTime(){
    time++;
    visualTime.innerText = changeTime();
}

function stopBtnClicked() {
    clearInterval(timerId);
    stopBtn.classList.add(HIDDEN);
    continueBtn.classList.remove(HIDDEN);
    resetBtn.classList.remove(HIDDEN);
    startBtn.classList.add(HIDDEN);
}

function continueBtnClicked() {
    continueBtn.classList.add(HIDDEN);
    stopBtn.classList.remove(HIDDEN);
    startBtn.classList.add(HIDDEN);
    timerId = setInterval(printTime, 10);
}

function resetBtnClicked() {
    clearInterval(timerId);
    continueBtn.classList.add(HIDDEN);
    resetBtn.classList.add(HIDDEN);
    startBtn.classList.remove(HIDDEN);
    stopBtn.classList.add(HIDDEN);
    time = -1;
    printTime();
}