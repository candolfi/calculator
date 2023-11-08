let displayNum = [];
let displayNum2 = [];
let displayOperator = [];

let display = document.querySelector('.display');
let operator = document.querySelectorAll('.operator')
let num = document.querySelectorAll('.number');
let equate = document.querySelector('.equal');

getNum1(num);
getNum2(num);
getOperator(operator);

//////////////////////////////////////////////////////////////////////////

function operate(num1, num2, operand) {
    if(operand = "+") {
        display.innerHTML = add(num1, num2);
        return;
    }
}

function getOperator(item) {
    item.forEach(item => {
        item.addEventListener('click', event => {
            display.innerHTML = item.innerHTML;
            displayOperator = [item.innerHTML];
        });
    })
    return displayOperator;
}

function getNum1(item) {
        item.forEach(item => {
            item.addEventListener('click', event => {
                if(displayOperator.length === 0){
                    displayNum.push(Number(item.innerHTML));
                    display.innerHTML = displayNum.join("");
                }
            });
    })
    return displayNum
}

function getNum2(item) {
    item.forEach(item => {
        item.addEventListener('click', event => {
            if(displayOperator.length > 0){
                displayNum2.push(Number(item.innerHTML));
                display.innerHTML = displayNum2.join("");
            }
        });
    })
    return displayNum2
}

const add = (num1, num2) => {
    const sum = num1 + num2;
    return sum;
}

const subtract = function(num1, num2){
    const difference = num1 - num2;
    return difference;
}

const multiply = function(num1, num2){
    const product = num1 * num2;
    return product;
}

const divide = function(num1, num2){
    const quotient = num1 / num2;
    return quotient;
}

const operate = function(num1, num2, operator){
    if(operator == '+'){
        return add(num1,num2);
    }
    if(operator == '-'){
        return subtract(num1,num2);
    }
    if(operator == '*'){
        return multiply(num1,num2);
    }
    if(operator == '/'){
        return divide(num1,num2);
    }
}
