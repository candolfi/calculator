let displayNum = [];
let displayNum2 = [];
let displayOperator = [];

let display = document.querySelector('.display');
let operator = document.querySelectorAll('.operator')
let num = document.querySelectorAll('.number');

getNum1(num);
getOperator(operator);
// getNum2(num);

//////////////////////////////////////////////////////////////////////////

function getOperator(item) {
    item.forEach(item => {
        item.addEventListener('click', event => {
            display.innerHTML = item.innerHTML;
            displayOperator = item.innerHTML;
        });
    })
}

function getNum1(item) {
    
        item.forEach(item => {
            item.addEventListener('click', event => {
                displayNum.push(Number(item.innerHTML));
                display.innerHTML = displayNum.join("");
            });
        return displayNum
        })
    
}

function getNum2(item) {
    item.forEach(item => {
        item.addEventListener('click', event => {
            displayNum.push(Number(item.innerHTML));
            display.innerHTML = displayNum.join("");
        });
    return displayNum
    })
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
