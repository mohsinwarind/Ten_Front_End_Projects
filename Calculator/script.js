const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
    document.body.classList.toggle("dark");
});

let display = document.getElementById('display');
let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function updateDisplay() {
    if (operation !== undefined && previousOperand !== '' && currentOperand === '') {
        // Show the previous operand and the operation when the second operand is not yet entered
        display.innerText = `${previousOperand} ${operation}`;
    } else if (operation !== undefined && previousOperand !== '' && currentOperand !== '') {
        // Show all components when both operands and the operation are present
        display.innerText = `${previousOperand} ${operation} ${currentOperand}`;
    } else if (currentOperand !== '') {
        // Show the current operand when it's being entered
        display.innerText = `${currentOperand}`;
    } else if (previousOperand !== '') {
        // Show the previous operand if it's present
        display.innerText = `${previousOperand}`;
    } else {
        // Default to '0' if nothing is entered
        display.innerText = '0';
    }
}



function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
}

function appendNumber(number) {
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') {
        display.innerText ="Select some Operand First dude!";
    }
    if (previousOperand !== '') {
        calculate();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
}

function calculate() {
    let computation;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentOperand = computation.toString();
    operation = undefined;
    previousOperand = '';
    updateDisplay();
}

clearDisplay();
