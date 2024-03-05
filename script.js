let firstNumber;
let secondNumber;
let operator;
























function operate(num1,operator,num2){
switch(operator){
    case '+':
        return add(num1,num2);
        break;
    case '-':
        return sub(num1,num2);
        break;
    case '*':
        return mult(num1,num2);
        break;
    case '/':
        return div(num1,num2);
        break;
    default: return 'Invalid Operator';
    }
}




function add(num1,num2)
{
return Number(num1)+Number(num2);    
}

function sub(num1,num2)
{
    return Number(num1)-Number(num2);    
}

function mult(num1,num2)
{
    return Number(num1)*Number(num2);    
}

function div(num1,num2)
{
    return Number(num1)/Number(num2);    
}