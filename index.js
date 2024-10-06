let firstNumber;
let secondNumber;
let operator;

const displayContent = document.querySelector(".Display-Content");
const buttons = document.querySelectorAll("button");




function operate(operator, firstNumber, secondNumber) {
    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    } else {
        return "ERROR";
    }
}

function add(numOne, numTwo) {
    return (numOne + numTwo);
}

function subtract(numOne, numTwo) {
    return (numOne - numTwo);
}

function multiply(numOne, numTwo) {
    return (numOne * numTwo);
}

function divide(numOne, numTwo) {
    return (numOne / numTwo);
}