const loginAlarm=document.querySelector("#Alarm");
const logintime=document.querySelector("#datetime");
const loginMessage=document.querySelector("#message");
const loginForm=document.querySelector("#submit");
const alarmContainer = document.querySelector("#alarm-container");

document.getElementById("datetime").value=new Date(+new Date()+1000 *60 *60 *9).toISOString().slice(0, 16);//+9시간해서 한국현재시간을 기본값으로 설정
let alarmTime = null;
let Message = "";
let intervalID = null;

function setAlarm(){
    loginStopwatch.classList.add("hidden");
    loginAlarm.classList.add("hidden");
    loginTimer.classList.add("hidden");
    alarmContainer.classList.remove("hidden");
    clock.classList.remove("hidden");
    clearInterval(getClockID);
    getClockA(); //바로 시간보기
    setInterval(getClockA,1000); //함수이름,ms
}

loginAlarm.addEventListener("click",setAlarm); 
//알람 화면 켜기 완//


function submit(event){
    event.preventDefault();
    Message=loginMessage.value.trim() || "기다리던 시간이 되었습니다"; //입력되지 않으면 다음내용 저장
    alarmTime=new Date(logintime.value);

    alert("알람이 설정되었습니다");

    if (intervalID) clearInterval(intervalID); //기존 설정된 알람 중지

    intervalID=setInterval(check,1000);
}

function check(){
    let now=new Date();
    if (now >= alarmTime){
        alert(Message);
        clearInterval(intervalID);
    }
} 

loginForm.addEventListener("submit",submit);


function getClockA(){//실시간 현재 시각 표시
    const date=new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}