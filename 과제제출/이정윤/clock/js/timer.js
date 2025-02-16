const time = document.querySelector('.timer_content span');
const startBtn = document.querySelector('.timer_content #timer_start_btn');
const resetBtn = document.querySelector('.timer_content #timer_reset_btn');

const hourInput = document.querySelector('.timer_content #hours_input');
const minuteInput = document.querySelector('.timer_content #minutes_input');
const secondInput = document.querySelector('.timer_content #seconds_input');

let timeValue = 0;
let intervalId;

function decreaseTime() {
  if (timeValue === 0) {
    clearInterval(intervalId);
    resetBtn.classList.add('hidden');
    startBtn.classList.remove('hidden');
    alert('일어나!');
    return;
  }
  timeValue -= 1;
  const hours = String(Math.floor(timeValue / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((timeValue % 3600) / 60)).padStart(2, '0');
  const seconds = String(timeValue % 60).padStart(2, '0'); // 수정된 부분

  time.innerText = `${hours}:${minutes}:${seconds}`;
}

function startTimer() {
  const hours = parseInt(hourInput.value) || 0;
  const minutes = parseInt(minuteInput.value) || 0;
  const seconds = parseInt(secondInput.value) || 0;
  timeValue = hours * 3600 + minutes * 60 + seconds;

  const hour = String(Math.floor(timeValue / 3600)).padStart(2, '0');
  const minute = String(Math.floor((timeValue % 3600) / 60)).padStart(2, '0');
  const second = String(timeValue % 60).padStart(2, '0'); // 수정된 부분

  startBtn.classList.add('hidden');
  hourInput.classList.add('hidden');
  minuteInput.classList.add('hidden');
  secondInput.classList.add('hidden');
  resetBtn.classList.remove('hidden');
  time.innerText = `${hour}:${minute}:${second}`;
  intervalId = setInterval(decreaseTime, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  startBtn.classList.remove('hidden');
  hourInput.classList.remove('hidden');
  minuteInput.classList.remove('hidden');
  secondInput.classList.remove('hidden');
  resetBtn.classList.add('hidden');
  time.innerText = '00:00:00';
  timeValue = 0;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
