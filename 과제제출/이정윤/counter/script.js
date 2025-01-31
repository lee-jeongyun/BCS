const num = document.querySelector('.num');
const upBtn = document.querySelector('.up');
const downBtn = document.querySelector('.down');
const resetBtn = document.querySelector('.reset');

function clickUpBtn() {
  const oriNum = num.innerText;
  num.innerText = Number(oriNum) + 1;
}

function clickDownBtn() {
  const oriNum = num.innerText;
  if (oriNum > 0) {
    num.innerText = Number(oriNum) - 1;
  }
}

function clickResetBtn() {
  num.innerText = 0;
}

upBtn.addEventListener('click', clickUpBtn);
downBtn.addEventListener('click', clickDownBtn);
resetBtn.addEventListener('click', clickResetBtn);
