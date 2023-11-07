let displayNum = [];
const display = document.querySelector('.display');

let num1 = document.querySelectorAll('.number').forEach(item =>{
    item.addEventListener('click', event => {
        displayNum.push(Number(item.innerHTML));
        display.innerHTML = displayNum.join("");
    });
    return displayNum
});


display.innerHTML = displayString;


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
