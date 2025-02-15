const alarm = document.querySelectorAll(".alarmBtn");
const stopWatch = document.querySelectorAll(".stopWatchBtn");
const timer = document.querySelectorAll(".timerBtn");

const aView = document.querySelector(".alarmView");
const sView = document.querySelector(".stopWatchView");
const tView = document.querySelector(".timerView");
const mView = document.querySelector(".mainView");

const HIDDEN = "hidden";
const CLICKED_COLOR = "clickedColor";

function addHiddenAll(){
    aView.classList.add(HIDDEN);
    sView.classList.add(HIDDEN);
    tView.classList.add(HIDDEN);
    mView.classList.add(HIDDEN);
}

function removeClickedColorAll() {
    alarm[1].classList.remove(CLICKED_COLOR);
    stopWatch[1].classList.remove(CLICKED_COLOR);
    timer[1].classList.remove(CLICKED_COLOR);
}

function alarmBtnClicked() {
    addHiddenAll();
    removeClickedColorAll();
    aView.classList.remove(HIDDEN);
    alarm[1].classList.add(CLICKED_COLOR);
}

function stopWatchBtnClicked() {
    addHiddenAll();
    removeClickedColorAll();
    sView.classList.remove(HIDDEN);
    stopWatch[1].classList.add(CLICKED_COLOR);
}

function timerBtnClicked() {
    addHiddenAll();
    removeClickedColorAll();
    tView.classList.remove(HIDDEN);
    timer[1].classList.add(CLICKED_COLOR);
}

alarm[0].addEventListener("click", alarmBtnClicked);
stopWatch[0].addEventListener("click", stopWatchBtnClicked);
timer[0].addEventListener("click", timerBtnClicked);

alarm[1].addEventListener("click", alarmBtnClicked);
stopWatch[1].addEventListener("click", stopWatchBtnClicked);
timer[1].addEventListener("click", timerBtnClicked);