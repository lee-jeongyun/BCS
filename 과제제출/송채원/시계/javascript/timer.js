const hoursSelect = document.querySelector("#hours");
const minutesSelect = document.querySelector("#minutes");
const secondsSelect = document.querySelector("#seconds");
const timeSelectBox = document.querySelector(".timeSelect div")

const timerStart = document.querySelector("#timerStart");
const timerStop = document.querySelector("#timerStop");
const timerContinue = document.querySelector("#timerContinue");
const timerReset = document.querySelector("#timerReset");
const alarmSound = document.querySelector("#alarmSound");

const timerTime = document.querySelector("#timerTime");
let repeatId;
let totSeconds = 0;
let paused = false;

function createOptions(select, max) {
    for (let i = 0; i <= max; i++){
        const option = document.createElement("option");
        option.value = i;
        option.innerText = String(i);
        select.appendChild(option);
    }
}

createOptions(hoursSelect, 23);
createOptions(minutesSelect, 59);
createOptions(secondsSelect, 59);

timerStart.addEventListener("click", timerStartClicked);
timerStop.addEventListener("click", timerStopClicked);
timerContinue.addEventListener("click", timerContinueClicked);
timerReset.addEventListener("click", timerResetClicked);

function timerStartClicked(event) {
    event.preventDefault();
    let h = parseInt(hoursSelect.value);
    let m = parseInt(minutesSelect.value);
    let s = parseInt(secondsSelect.value);
    totSeconds = h * 3600 + m * 60 + s;
    
    if (totSeconds === 0) {
        alert("시간을 설정하세요.")
        return;
    }

    updateTime(totSeconds);

    timerTime.classList.remove(HIDDEN);
    timerStart.classList.add(HIDDEN);
    timerStop.classList.remove(HIDDEN);
    timerReset.classList.remove(HIDDEN);
    timeSelectBox.classList.add(HIDDEN);

    repeatId = setInterval(() => {
        if (totSeconds > 0){
            totSeconds--;
            updateTime(totSeconds);
        } else {
            alarmSound.play();
            timerContinue.classList.add(HIDDEN);
            timerStart.classList.remove(HIDDEN);
            timerReset.classList.add(HIDDEN);
            timerStop.classList.add(HIDDEN);
            clearInterval(repeatId);
            alert("끝!");
        }
    }, 1000);
}

function updateTime(time) {
    let h = Math.floor(time/3600);
    let m = Math.floor((time % 3600) / 60);
    let s = time % 60;
    timerTime.innerText = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

function timerStopClicked(event) {
    event.preventDefault();
    clearInterval(repeatId);

    timerContinue.classList.remove(HIDDEN);
    timerStop.classList.add(HIDDEN);
    timerReset.classList.remove(HIDDEN);
}

function timerContinueClicked(event) {
    event.preventDefault();
    timerStop.classList.remove(HIDDEN);
    timerContinue.classList.add(HIDDEN);

    repeatId = setInterval(() => {
        if (totSeconds > 0){
            totSeconds--;
            updateTime(totSeconds);
        } else {
            clearInterval(repeatId);
            alarmSound.play();
            alert("끝!");
        }
    }, 1000);
}

function timerResetClicked(event) {
    event.preventDefault();
    clearInterval(repeatId);
    timerContinue.classList.add(HIDDEN);
    timerStop.classList.add(HIDDEN);
    timerReset.classList.add(HIDDEN);
    timerStart.classList.remove(HIDDEN);
    timerTime.classList.add(HIDDEN);
    timeSelectBox.classList.remove(HIDDEN);
    totSeconds = 0;
}