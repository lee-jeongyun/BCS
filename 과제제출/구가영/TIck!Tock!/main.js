function getClock(){//실시간 현재 시각 표시
    const date=new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}`;
}
getClock();
let getClockID=setInterval(getClock,1000);