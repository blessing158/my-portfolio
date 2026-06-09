let currentInput = "";
let firstValue = null;
let operator = null;
let waiting = false;

const display = document.getElementById("display");

function appendValue(value) {
    if (waiting) {
        currentInput = "";
        waiting = false;
    }

    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    firstValue = null;
    operator = null;
    display.value = "";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === "") return;

    if (firstValue === null) {
        firstValue = parseFloat(currentInput);
    } else if (operator) {
        firstValue = calculateResult();
    }

    operator = op;
    waiting = true;
}

function calculateResult() {
    let secondValue = parseFloat(currentInput);

    if (operator === "+") return firstValue + secondValue;
    if (operator === "-") return firstValue - secondValue;
    if (operator === "*") return firstValue * secondValue;
    if (operator === "/") return secondValue !== 0 ? firstValue / secondValue : "Error";

    return secondValue;
}

function calculate() {
    if (operator === null) return;

    let result = calculateResult();
    display.value = result;

    currentInput = result.toString();
    firstValue = null;
    operator = null;
}
