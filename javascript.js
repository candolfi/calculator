let arrayNum = [];
let arrayNum2 = [];
let stringNum = [];
let stringNum2 = [];
let displayOperator = [];
let answer = [];
let decimal1 = [];
let decimal2 = [];

const display = document.querySelector('.display1');
const display2 = document.querySelector('.display2');
const operator = document.querySelectorAll('.operator')
const num = document.querySelectorAll('.number');
const equate = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');

getNum1(num);
getNum2(num);
getOperator(operator);
equate.addEventListener('click', event => calculate());
clear.addEventListener('click', event => allClear());
decimal.addEventListener('click', event => decimalPoint());

//////////////////////////////////////////////////////////////////////////
function calculate(){
    if(arrayNum2.length !== 0){
        operate(parseFloat(stringNum),parseFloat(stringNum2),displayOperator[0]);
    }
}

function getOperator(item) {
    item.forEach(item => {
        item.addEventListener('click', event => {
            if(answer.length > 0){
                answer = [];
            }
            if(arrayNum2.length !== 0){
               display.innerHTML = operate(Number(stringNum),Number(stringNum2),displayOperator[0]);
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
                if(answer.length > 0){
                    allClear();
                    arrayNum.push(Number(item.innerHTML));
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

function decimalPoint(){
    if(displayOperator.length === 0 && decimal1.length === 0){
        arrayNum.push(".");
        stringNum = arrayNum.join("");
        decimal1[0] = 1;
        display.innerHTML = arrayNum.join("");
    }
    if(displayOperator.length > 0 && decimal2.length === 0){
        arrayNum2.push(".");
        stringNum2 = arrayNum2.join("");
        decimal2[0] = 1;
        display.innerHTML = arrayNum2.join("");
    }
    if(answer.length > 0){
        allClear();
        arrayNum.push(".");
        stringNum = arrayNum.join("");
        decimal1[0] = 1;
        display.innerHTML = arrayNum.join("");
    }
}
function allClear() {
    arrayNum = [];
    arrayNum2 = [];
    displayOperator = [];
    answer = []
    stringNum = [];
    stringNum2 = [];
    decimal1 = [];
    decimal2 = [];
    display.innerHTML = '0';
    display2.innerHTML = "";
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
    }
    if(operator == ' - '){
        stringNum = subtract(num1,num2);
    }
    if(operator == ' x '){
        stringNum = multiply(num1,num2);
    }
    if(operator == ' / '){
        stringNum = divide(num1,num2);
    }
    arrayNum2 = [];
    decimal2 = [];
    answer.push(stringNum);
    display.innerHTML = stringNum;
    return display2.innerHTML = ""
}
