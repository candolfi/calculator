let arrayNum = [];
let arrayNum2 = [];
let stringNum = [];
let stringNum2 = [];
let displayOperator = [];
let answer = [];

const display = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const operator = document.querySelectorAll('.operator')
const num = document.querySelectorAll('.number');
const equate = document.querySelector('.equal');
const clear = document.querySelector('.clear');

getNum1(num);
getNum2(num);
getOperator(operator);
equate.addEventListener('click', event => operate(Number(stringNum),Number(stringNum2),displayOperator[0]));
clear.addEventListener('click', event => allClear());



//////////////////////////////////////////////////////////////////////////

function getOperator(item) {
    item.forEach(item => {
        item.addEventListener('click', event => {
            if(arrayNum2.length !== 0){
               display1.innerHTML = operate(Number(stringNum),Number(stringNum2),displayOperator[0]);
            }
            display2.innerHTML = item.innerHTML;
            displayOperator = [item.innerHTML];
        });
    })
    return displayOperator[0];
}

function getNum1(item) {
        item.forEach(item => {
            item.addEventListener('click', event => {
                if(displayOperator.length === 0){
                    arrayNum.push(Number(item.innerHTML))
                    stringNum = arrayNum.join("");
                    display.innerHTML = arrayNum.join("");
                }
            });
    })
    return
}

function getNum2(item) {
    item.forEach(item => {
        item.addEventListener('click', event => {
            if(displayOperator.length > 0){
                arrayNum2.push(Number(item.innerHTML));
                stringNum2 = arrayNum2.join("");
                display.innerHTML = arrayNum2.join("");
            }
        });
    })
    return
}

function allClear() {
    arrayNum = [];
    arrayNum2 = [];
    displayOperator = [];
    answer = []
    stringNum = [];
    stringNum2 = [];
    display.innerHTML = '0';
    return;
}

function add(num1, num2){
    const sum = num1 + num2;
    return sum;
}

function subtract(num1, num2){
    const difference = num1 - num2;
    return difference;
}

function multiply(num1, num2){
    const product = num1 * num2;
    return product;
}

function divide(num1, num2){
    const quotient = num1 / num2;
    return quotient;
}

function operate(num1, num2, operator){
    if(operator == ' + '){ 
        stringNum = add(num1,num2);
        arrayNum2 = [];
        return display.innerHTML = add(num1,num2);
    }
    if(operator == ' - '){
        stringNum = subtract(num1,num2);
        arrayNum2 = [];
        return display.innerHTML = subtract(num1,num2);
    }
    if(operator == ' x '){
        stringNum = multiply(num1,num2);
        arrayNum2 = [];
        return display.innerHTML = multiply(num1,num2);
    }
    if(operator == ' / '){
        stringNum = divide(num1,num2);
        arrayNum2 = [];
        return display.innerHTML = divide(num1,num2);
    }
}
