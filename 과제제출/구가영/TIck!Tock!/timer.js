const loginTimer=document.querySelector("#Timer");

const loginMinutes=document.querySelector("#Minutes");
const loginSeconds=document.querySelector("#Seconds");
const loginResetT=document.querySelector("#ResetT");
const loginTButton=document.querySelector("#StartTB"); //버튼 찾기

let isRunning = false; // 타이머 실행 여부 플래그
let timerId =null; 

function plusmin(){ //+1분 
    if(isRunning) forthefirst();
    else{
    minutes +=1;
        if(minutes>=60)minutes=0;
        clock.innerText=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    }
}
function plussec(){ //+1초 
    if(isRunning) forthefirst();
    else{
    seconds +=1;
        if(seconds>=60) {
            seconds=0;
            minutes+=1;
        }
        clock.innerText=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    }
}
function reset(){ //숫자 모두 0으로 초기화
    if (timerId !=null) stopTimer();
    minutes = 0;
    seconds = 0;
    clock.innerText=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}
function going(){ //타이머 시작한 후에 시간재기.
    if (minutes==0 && seconds==0) {
        stopTimer();
        alert("Ring~ RIng~ Timer finished!!");
        return;
    }
    else if (seconds==0){
        minutes-=1;
        seconds=59;
    }
    else {
        seconds-=1;
    }
    clock.innerText=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}
function timer(){ //타이머 시작하기
    if (timerId != null) return; //이미 실행 중이면 중복 실행(스타트) 방지.
    console.log("Start!!");
    isRunning=true;
    timerId=setInterval(going,1000);
}
function stopTimer(){ //타이머 실행 중일때 다른 버튼을 누르면/타이머 시간 다되면. 타이머 멈추기.
    clearInterval(timerId);
    timerId=null;
    isRunning =false;
}
function forthefirst(){ //처음으로 완전 초기화하기 위한.
    if (isRunning){
        alert("타이머를 다시 시작할까요?");
        reset();
    }
}

function StartTimer(){ //Timer 재생
    clearInterval(getClockID);
    reset();
    loginStopwatch.classList.add("hidden");
    loginAlarm.classList.add("hidden");
    loginTimer.classList.add("hidden");
    loginTButton.classList.remove("hidden");
    loginMinutes.classList.remove("hidden");
    loginResetT.classList.remove("hidden");
    loginSeconds.classList.remove("hidden");
}

//아래 자동 반복 //버튼 클릭시 함수 실행
loginMinutes.addEventListener("click",plusmin);
loginSeconds.addEventListener("click",plussec);
loginResetT.addEventListener("click",reset);
loginTButton.addEventListener("click",timer); 
loginTimer.addEventListener("click",StartTimer);
