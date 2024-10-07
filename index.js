let firstNumber = "";
let secondNumber = "";
let operator = "";

const displayContent = document.querySelector(".Display-Content");

numberButton();
operatorButton();
equalsButton();
clearButton();
backSpaceButton();


function backSpaceButton() {
    const backSpace = document.querySelector("#Back-Space");

    backSpace.addEventListener("click", () => {
        displayContent.textContent = displayContent.textContent.slice(0, -1);
    })
}

function clearButton() {
    const clearButton = document.querySelector("#Clear");

    clearButton.addEventListener("click", () => {
        firstNumber = "";
        secondNumber = "";
        operator = "";
        displayContent.textContent = "";
    })
}

function equalsButton() {
    const equalsButton = document.querySelector(".Equals");

    equalsButton.addEventListener("click", () => {
        if (firstNumber !== "" && operator !== "" && displayContent.textContent !== "") {
            secondNumber = parseFloat(displayContent.textContent);
            displayContent.textContent = "";
            let result = (operate(operator, firstNumber, secondNumber));
            displayContent.textContent = result;
        }
    })
}

function operatorButton() {
    const operatorButtons = document.querySelectorAll(".Operator");

    operatorButtons.forEach((button) => {

        button.addEventListener("click", () => {
            
            if (firstNumber === "" && displayContent.textContent !== "") {
                firstNumber = parseFloat(displayContent.textContent);
                displayContent.textContent = "";

                if (button.textContent === "+" || button.textContent === "-") {
                    operator = button.textContent;
                } else if (button.textContent === "×") {
                    operator = "*";
                } else if (button.textContent === "÷") {
                    operator = "/";
                }    
            } else if (firstNumber !== "" && displayContent.textContent !== "") {
                secondNumber = parseFloat(displayContent.textContent);
                result = operate(operator, firstNumber, secondNumber);
                firstNumber = result;
                displayContent.textContent = "";
                if (button.textContent === "+" || button.textContent === "-") {
                    operator = button.textContent;
                } else if (button.textContent === "×") {
                    operator = "*";
                } else if (button.textContent === "÷") {
                    operator = "/";
                }
            }
        })
    })
}

function numberButton() {
    const numberButtons = document.querySelectorAll(".Number");

    numberButtons.forEach((button) => {
        let num = button.textContent;

        button.addEventListener("click", () => {
            if (num === ".") {
                if (!displayContent.textContent.includes(".")) {
                    displayContent.textContent += num;
                }
            } else {
                displayContent.textContent += num;
            }
        })
    })
}

function operate(operator, firstNumber, secondNumber) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        return multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        return divide(firstNumber, secondNumber);
    } else {
        return "ERROR";
    }
}

function add(numOne, numTwo) {
    let result = (numOne + numTwo);
    return Math.round(result * 10) / 10;
}

function subtract(numOne, numTwo) {
    let result = (numOne - numTwo);
    return Math.round(result * 10) / 10;
}

function multiply(numOne, numTwo) {
    let result = (numOne * numTwo);
    return Math.round(result * 10) / 10;
}

function divide(numOne, numTwo) {
    if (numTwo !== 0) {
        let result = (numOne / numTwo);
        return Math.round(result * 10) / 10;
    } else {
        return "Stop That!";
    }
}