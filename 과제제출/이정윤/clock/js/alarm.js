const alarmHourInput = document.querySelector(
  '.alarm_content #alarm_hours_input'
);
const alarmMinuteInput = document.querySelector(
  '.alarm_content #alarm_minutes_input'
);
const alarmSecondInput = document.querySelector(
  '.alarm_content #alarm_seconds_input'
);
const alarmSetBtn = document.querySelector('.alarm_content #alarm_set_btn');
const alarmList = document.querySelector('.alarm_content #alarm_list');

let alarms = [];

const ALARM_KEY = 'alarm';

function alarmRing() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  alarms.forEach((alarm) => {
    if (
      parseInt(alarm.hour) === currentHour &&
      parseInt(alarm.minute) === currentMinute &&
      parseInt(alarm.second) === currentSecond
    ) {
      alert('일어나!');
    }
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
  span.innerText = `${newAlarm.hour}:${newAlarm.minute}:${newAlarm.second}`;
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteAlarm);
  li.appendChild(span);
  li.appendChild(button);
  alarmList.appendChild(li);
}

function handleAlarmSubmit(event) {
  event.preventDefault();
  const newAlarmObj = {
    hour: alarmHourInput.value,
    minute: alarmMinuteInput.value,
    second: alarmSecondInput.value,
    id: Date.now(),
  };
  alarmHourInput.value = '';
  alarmMinuteInput.value = '';
  alarmSecondInput.value = '';

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
