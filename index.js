let firstNumber = "";
let secondNumber = "";
let operator = "";

const displayContent = document.querySelector(".Display-Content");

numberButton();
operatorButton();
equalsButton();
clearButton();
backSpaceButton();
keyboardNum();
keyboardOperator();
keyboardEquals();
keyboardBackSpace();
keyboardClear();

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
        displayContent.style.color = "black";
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
            displayContent.style.color = "green";
        }
    })
}

function operatorButton() {
    const operatorButtons = document.querySelectorAll(".Operator");

    operatorButtons.forEach((button) => {

        button.addEventListener("click", () => {
            
            if ((firstNumber === "" && displayContent.textContent !== "") 
                || (firstNumber !== "" && secondNumber !== "")) {
                firstNumber = parseFloat(displayContent.textContent);
                displayContent.textContent = "";
                displayContent.style.color = "black";

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
                displayContent.style.color = "black";
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
            displayContent.style.color = "black";
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

function keyboardClear() {
    const webPage = document.querySelector("#Web-Page");

    webPage.addEventListener("keydown", (e) => {
        if (e.key === "C") {
            firstNumber = "";
            secondNumber = "";
            operator = "";
            displayContent.textContent = "";
            displayContent.style.color = "black";
        }
    })
}

function keyboardBackSpace() {
    const webPage = document.querySelector("#Web-Page");

    webPage.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            displayContent.textContent = displayContent.textContent.slice(0, -1);
        }
    })
}

function keyboardEquals() {
    const webPage = document.querySelector("#Web-Page");

    webPage.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            if (firstNumber !== "" && operator !== "" && displayContent.textContent !== "") {
                secondNumber = parseFloat(displayContent.textContent);
                displayContent.textContent = "";
                let result = (operate(operator, firstNumber, secondNumber));
                displayContent.textContent = result;
                displayContent.style.color = "green";
            }
        }
    })
}

function keyboardOperator() {
    const webPage = document.querySelector("#Web-Page");

    webPage.addEventListener("keydown", (e) => {
        if (e.key === "+" 
            || e.key === "-" 
            || e.key === "*" 
            || e.key === "/") {
                if ((firstNumber === "" && displayContent.textContent !== "") 
                    || (firstNumber !== "" && secondNumber !== "")) {
                    firstNumber = parseFloat(displayContent.textContent);
                    displayContent.textContent = "";
                    displayContent.style.color = "black";

                    operator = e.key;
                } else if (firstNumber !== "" && displayContent.textContent !== "") {
                    secondNumber = parseFloat(displayContent.textContent);
                    result = operate(operator, firstNumber, secondNumber);
                    firstNumber = result;
                    displayContent.textContent = "";
                    displayContent.style.color = "black";

                    operator = e.key;
                }
        }
    })
}

function keyboardNum() {
    const webPage = document.querySelector("#Web-Page");

    webPage.addEventListener("keydown", (e) => {
        if (e.key === "0" || e.key === "1" || e.key === "2" 
            || e.key === "3" || e.key === "4" || e.key === "5"
            || e.key === "6" || e.key === "7" || e.key === "8"
            || e.key === "9" || e.key === ".") {
                displayContent.style.color = "black";
                if (e.key === ".") {
                    if (!displayContent.textContent.includes(".")) {
                        displayContent.textContent += e.key;
                    }
                } else {
                    displayContent.textContent += e.key;
                }
        }
    })
}