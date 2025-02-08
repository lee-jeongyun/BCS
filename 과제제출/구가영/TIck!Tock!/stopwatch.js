const loginStopwatch=document.querySelector("#StopWatch");
const clock =document.querySelector("h2#clock");
const loginSButton=document.querySelector("#StartSB"); //버튼 찾기
const loginStop=document.querySelector("#Stop");
const loginResetS=document.querySelector("#ResetS");

let minutes =0;
let seconds =0;
let SWId =null;

function getClockS(){ //
    clock.innerText = `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    seconds +=1;
    if (seconds >=60) {
        seconds=0;
        minutes+=1;
        if (minutes >=60) {
            alert("나의 한계는 1시간이다. 더이상은 무리다.");
        }
    }
}

function startSTWC(){ //스톱워치 재생
    clearInterval(getClockID);
    minutes =0;
    seconds =0;
    clock.innerText=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
    loginStopwatch.classList.add("hidden");
    loginAlarm.classList.add("hidden");
    loginTimer.classList.add("hidden");
    loginSButton.classList.remove("hidden");
    loginStop.classList.remove("hidden");
    loginResetS.classList.remove("hidden");
}

function play(){
    SWId=setInterval(getClockS,1000);
}
function stop(){
    clearInterval(SWId);
}
function reset(){
    clearInterval(SWId);
    SWId=null;
    minutes =0;
    seconds =0;
    clock.innerText=`${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;
}

loginSButton.addEventListener("click",play); 
loginStop.addEventListener("click",stop);
loginResetS.addEventListener("click",reset);
loginStopwatch.addEventListener("click",startSTWC);
