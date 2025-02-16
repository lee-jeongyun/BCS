import './js/timer.js';
import './js/clock.js';
import './js/stopwatch.js';
import './js/alarm.js';

const timer = document.querySelector('.timer_content');
const stopwatch = document.querySelector('.stopwatch_content');
const alarm = document.querySelector('.alarm_content');

const timerBtn = document.querySelector('.timer_btn');
const stopwatchBtn = document.querySelector('.stopwatch_btn');
const alarmBtn = document.querySelector('.alarm_btn');

function timerActive() {
  timer.classList.remove('hidden');
  stopwatch.classList.add('hidden');
  alarm.classList.add('hidden');
}

function stopwatchActive() {
  timer.classList.add('hidden');
  stopwatch.classList.remove('hidden');
  alarm.classList.add('hidden');
}

function alarmActive() {
  timer.classList.add('hidden');
  stopwatch.classList.add('hidden');
  alarm.classList.remove('hidden');
}

timerBtn.addEventListener('click', timerActive);
stopwatchBtn.addEventListener('click', stopwatchActive);
alarmBtn.addEventListener('click', alarmActive);
