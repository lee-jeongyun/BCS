const time = document.querySelector('.stopwatch_content span');
const startBtn = document.querySelector(
  '.stopwatch_content #stopwatch_start_btn'
);
const stopBtn = document.querySelector(
  '.stopwatch_content #stopwatch_stop_btn'
);
const resetBtn = document.querySelector(
  '.stopwatch_content #stopwatch_reset_btn'
);

let timeValue = 0;
let intervalId;

function formatTime(ms) {
  const minutes = String(Math.floor(ms / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  const milliseconds = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
  return `${minutes}:${seconds}:${milliseconds}`;
}

function increaseTime() {
  timeValue += 10;
  time.innerText = formatTime(timeValue);
}

function startStopwatch() {
  startBtn.classList.add('hidden');
  stopBtn.classList.remove('hidden');
  resetBtn.classList.remove('hidden');
  intervalId = setInterval(increaseTime, 10);
}

function stopStopwatch() {
  clearInterval(intervalId);
  startBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
}

function resetStopwatch() {
  clearInterval(intervalId);
  timeValue = 0;
  time.innerText = formatTime(timeValue);
  startBtn.classList.remove('hidden');
  stopBtn.classList.add('hidden');
  resetBtn.classList.add('hidden');
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
resetBtn.addEventListener('click', resetStopwatch);
