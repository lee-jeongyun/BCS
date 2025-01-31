const number = document.getElementById("number");
const plusBtn = document.querySelector("#plus");
const resetBtn = document.querySelector("#reset");
const minusBtn = document.querySelector("#minus");

plusBtn.addEventListener("click", clickedPlusBtn);
minusBtn.addEventListener("click", clickedMinusBtn);
resetBtn.addEventListener("click", clickedResetBtn);

const calculate = {
    plus: function (num) {
        return num+1;
    },
    minus: function (num) {
        return num-1;
    },
    reset: function () {
        return 0;
    }
}

function clickedPlusBtn(event) {
    event.preventDefault();
    let intNum = parseInt(number.innerText);
    intNum = calculate.plus(intNum);
    number.innerText = intNum.toString();
}

function clickedMinusBtn(event) {
    event.preventDefault();
    let intNum = parseInt(number.innerText);
    intNum = calculate.minus(intNum);
    number.innerText = intNum.toString();
}

function clickedResetBtn(event) {
    event.preventDefault();
    let intNum = parseInt(number.innerText);
    intNum = calculate.reset(intNum);
    number.innerText = intNum.toString();
}





