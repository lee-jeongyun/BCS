const alarmEdit = document.querySelector("#alarmEdit");
const alarmAdd = document.querySelector("#alarmAdd");
const deleteDone = document.querySelector("#deleteDone");

let alarmList = document.querySelector("#alarmList");
let alarmDelete = document.querySelectorAll(".alarmDelete");
let totAlarmNum = localStorage.length;

const timeSelectView = document.querySelector("#alarmTimeSelect");
const mainAlarmView = document.querySelector("#mainAlarmView");

const noon = document.querySelector("#noon");
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");

const OPTION = "option";

const alarmCancle = document.querySelector("#alarmCancle");
const alarmSave = document.querySelector("#alarmSave");

function createOptions(select, max) {
    if (isNaN(max) === true) {
        const option = document.createElement(OPTION);
        option.value = max;
        option.innerText = max;
        select.appendChild(option);
    }else {
        for (let i = 0; i <= max; i++){
            const option = document.createElement(OPTION);
            option.value = i;
            if (select === minute) {
                option.innerText = String(i).padStart(2, "0");
            } else {
                if (i === 0) { continue; }
                option.innerText = String(i);
            }
            select.appendChild(option);
        }
    }
    
}

createOptions(noon, "오전");
createOptions(noon, "오후");
createOptions(hour, 12);
createOptions(minute, 59);

//알람 삭제 버튼 화면에 드러내기
function showDeleteBtn(){
    let alarmDelete = document.querySelectorAll(".alarmDelete");
    let alarmList = document.querySelector("#alarmList");
    
    alarmEdit.classList.add(HIDDEN);
    deleteDone.classList.remove(HIDDEN);

    for (let i = 0; i < totAlarmNum; i++){
        alarmDelete[i].classList.remove(HIDDEN);
    }
    alarmList.addEventListener("click", (event) => {//알람 삭제 버튼 클릭하면
    if (event.target.classList.contains("alarmDelete")) {
        const li = event.target.closest("li");
        if (li) {
            for (let i = 0; i < localStorage.length; i++){
                if (localStorage.key(i) === li.id){
                    localStorage.removeItem(`${li.id}`);
                }
            }
            li.remove();//해당 li 제거
            checkEmptyAlarm();
        }
    }
    });
}

function hideDeleteBtn() {
    let alarmDelete = document.querySelectorAll(".alarmDelete");
    deleteDone.classList.add(HIDDEN);
    alarmEdit.classList.remove(HIDDEN);
    for (let i = 0; i < totAlarmNum; i++){
        alarmDelete[i].classList.add(HIDDEN);
    }
}

//알람 추가하기
function addNewAlarm() {
    mainAlarmView.style.backgroundColor = "rgb(56, 56, 56)";
    timeSelectView.classList.remove(HIDDEN);
    alarmEdit.classList.remove(HIDDEN);
    deleteDone.classList.add(HIDDEN);
    hideDeleteBtn();
    alarmCancle.addEventListener("click", (event)=> {
        event.preventDefault();
        timeSelectView.classList.add(HIDDEN);
        mainAlarmView.style.backgroundColor= "gray";
    })
    alarmSave.addEventListener("click", saveNewAlarm);
}

//새 알람 저장하기
function saveNewAlarm(event) {
    event.preventDefault();
    const n = noon.value;
    const h = hour.value;
    const m = minute.value;
    const ID = setID();
    localStorage.setItem(ID, JSON.stringify({noon: n, hour: h, minute: m, on: "on"}))

    if (n != null && h != null && m != null){
        paintInMainView(n,h,m,ID);
    }else {
        alert("날짜를 모두 선택해주세요.");
        saveNewAlarm();
    }
    timeSelectView.classList.add(HIDDEN);
    mainAlarmView.style.backgroundColor= "gray";
    checkEmptyAlarm();
}

//알람 없는지 체크
function checkEmptyAlarm() {
    const noAlarm = document.querySelector("#noAlarm");
    const HIDDEN = "hidden";
    if (localStorage.length === 0){
        noAlarm.classList.remove(HIDDEN);
    } else {
        noAlarm.classList.add(HIDDEN);
    }
}

//메인화면 알람 리스트 수정
function paintInMainView(n,h,m,ID) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    const p = document.createElement("p");
    const hr = document.createElement("hr");
    button.classList.add("alarmDelete", "hidden");
    button.innerText = 'ㅡ';
    span.innerText = n;
    p.innerText = `${h}:${m.padStart(2, "0")}`;
    li.appendChild(button);
    li.appendChild(span);
    li.appendChild(p);
    li.appendChild(hr);
    li.id = ID;
    alarmList.appendChild(li);
}

//새로운 아이디 생성
function setID() {
    let a = `A${Math.floor(Math.random() * 99 + 1)}`;
    for (let i = 0; i < localStorage.length; i++){
        if (a === localStorage.key(i)){
            setID();
        }
    }
    return a;
}

checkEmptyAlarm();
alarmEdit.addEventListener("click", showDeleteBtn);
alarmAdd.addEventListener("click", addNewAlarm);
deleteDone.addEventListener("click", hideDeleteBtn);

keepCheckTime = setInterval(() => {
    totAlarmNum = localStorage.length;
    for (let i = 0 ; i < totAlarmNum; i++){
        const key = localStorage.key(i);
        const value = JSON.parse(localStorage.getItem(key));
        let nowHour = new Date().getHours();
        const nowMinute = new Date().getMinutes();
        const nowSecond = new Date().getSeconds();
        if (value.noon === "오후"){
            nowHour = nowHour - 12;
        }
        if (value.hour === nowHour && value.minute === nowMinute && value.on === "on"){
            alarmSound.play();
            value.on = "off";
        }
    }
}, 1000)

for (let i = 0 ; i < totAlarmNum; i++){
    const key = localStorage.key(i);
    const value = JSON.parse(localStorage.getItem(key));
    paintInMainView(value.noon, value.hour, value.minute, key);
}
/*구현할 내용
1. 삭제 기능 안됨 이거 고칠 것(tlqkf 왜 계속 오류나냐)
2. 저장된 알림 백그라운드에서 실제로 작동 시킬 것
(D)3. 맨 처음에는 알람 없음만 띄우고 이후 알람 추가되면 알람 없음 지울 것
4. 알람 추가 화면 떴을 때 메인 화면 누르면 자동 취소되게 할 것
5. 알람 추가 화면 뜨고 들어갈 때 위아래로 자연스럽게 움직이게 할 것
6. 알람 추가 화면에서 시간 선택할 때 좀 더 이쁘게 할 수 있다면 좋을 듯
7. 이외에도 구현하고 싶은 기능이 있다면 화이팅!
(ps.주석 좀 달아보자)
*/
