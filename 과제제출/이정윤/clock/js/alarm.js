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
  const formattedMinute = String(newAlarm.minute).padStart(2, '0');
  if (newAlarm.day === '오후') {
    const formattedHour = newAlarm.hour === 12 ? 12 : newAlarm.hour - 12;
    span.innerText = `${newAlarm.day} ${formattedHour}:${formattedMinute}`;
  } else {
    const formattedHour = newAlarm.hour === 0 ? 12 : newAlarm.hour;
    span.innerText = `${newAlarm.day} ${formattedHour}:${formattedMinute}`;
  }
  const button = document.createElement('button');
  button.innerText = '❌';
  button.addEventListener('click', deleteAlarm);
  li.appendChild(span);
  li.appendChild(button);
  alarmList.appendChild(li);
}

function handleAlarmSubmit(event) {
  event.preventDefault();
  let hour = parseInt(alarmHourInput.value);
  if (alarmDayInput.value === '오후') {
    hour = hour < 12 ? hour + 12 : hour;
  } else if (alarmDayInput.value === '오전' && hour === 12) {
    hour = 0;
  }
  const newAlarmObj = {
    hour: hour,
    minute: parseInt(alarmMinuteInput.value),
    day: alarmDayInput.value,
    id: Date.now(),
  };
  alarmHourInput.value = '3';
  alarmMinuteInput.value = '2';
  alarmDayInput.value = '오전';

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

alarmHourInput.value = '3';
alarmMinuteInput.value = '2';
alarmDayInput.value = '오전';

setInterval(alarmRing, 1000);
