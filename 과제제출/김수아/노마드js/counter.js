const plusbtn = document.querySelector('#counter #plusbtn');
const minusbtn = document.querySelector('#counter #minusbtn');
const count = document.querySelector('#counter #countnum');

function plusone() {
  let number = Number(count.innerText);
  count.innerText = number + 1;
}

function minusone() {
  let number = Number(count.innerText);
  if (number > 0) {
    count.innerText = number - 1;
  }
}

plusbtn.addEventListener('click', plusone);
minusbtn.addEventListener('click', minusone);
