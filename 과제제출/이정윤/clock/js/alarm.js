const alarmHourInput = document.querySelector(
  '.alarm_content #alarm_hours_input'
);
const alarmMinuteInput = document.querySelector(
  '.alarm_content #alarm_minutes_input'
);
const alarmDayInput = document.querySelector(
  '.alarm_content #alarm_day_or_night_input'
);
const alarmSetBtn = document.querySelector('.alarm_content #alarm_set_btn');
const alarmList = document.querySelector('.alarm_content #alarm_list');

let alarms = [];

const ALARM_KEY = 'alarm';

function alarmRing() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  alarms.forEach((alarm) => {
    if (
      parseInt(alarm.hour) === currentHour &&
      parseInt(alarm.minute) === currentMinute &&
      0 === currentTime.getSeconds()
    ) {
      alert('일어나!');
    }
    console.log(alarm.hour, currentHour, currentMinute);
  });
}

function saveAlarm() {
  localStorage.setItem(ALARM_KEY, JSON.stringify(alarms));
}

function deleteAlarm(event) {
  const li = event.target.parentElement;
  li.remove();
  alarms = alarms.filter((alarm) => alarm.id !== parseInt(li.id));
  saveAlarm();
}

function paintAlarm(newAlarm) {
  const li = document.createElement('li');
  li.id = newAlarm.id;
  const span = document.createElement('span');
  span.innerText = `${newAlarm.day} ${newAlarm.hour}:${newAlarm.minute}`;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteAlarm);
  li.appendChild(span);
  li.appendChild(button);
  alarmList.appendChild(li);
}

function handleAlarmSubmit(event) {
  event.preventDefault();
  if (alarmDayInput.value === '오후') {
    alarmHourInput.value = parseInt(alarmHourInput.value) + 12;
  }
  const newAlarmObj = {
    hour: alarmHourInput.value,
    minute: alarmMinuteInput.value,
    day: alarmDayInput.value,
    id: Date.now(),
  };
  alarmHourInput.value = '';
  alarmMinuteInput.value = '';
  alarmDayInput.value = '';

  alarms.push(newAlarmObj);
  paintAlarm(newAlarmObj);
  saveAlarm();
}

alarmSetBtn.addEventListener('click', handleAlarmSubmit);

const savedAlarms = localStorage.getItem(ALARM_KEY);

if (savedAlarms !== null) {
  const parsedAlarms = JSON.parse(savedAlarms);
  alarms = parsedAlarms;
  parsedAlarms.forEach(paintAlarm);
}

setInterval(alarmRing, 1000);
