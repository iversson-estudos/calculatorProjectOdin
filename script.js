let currentOperation='';

//BUTTONS
const display = document.getElementById('display');
const opButton = Array.from(document.getElementsByClassName('opButton'));
const numberButton = Array.from(document.getElementsByClassName('numberButton'));
const clearButton = document.getElementById('clearButton');
const calcButton = document.getElementById('calcButton');




//EVENT LISTENERS FOR THE BUTTONS

clearButton.addEventListener('click',clearDisplay);
calcButton.addEventListener('click',calculate);

numberButton.forEach(element => {
    element.addEventListener('click',numberClicked);
});

opButton.forEach(element => {
    element.addEventListener('click',opClicked);
});








//TAKES WHATS ON DISPLAY AND CALCULATES WHEN EQUAL BUTTON PRESSED
function calculate()
{   
    let splitDisplay = display.textContent.split(currentOperation);
    let result = operate(splitDisplay[0],currentOperation,splitDisplay[1]);
    display.textContent=result;
    currentOperation='';
}

//CLEARS DISPLAY
function clearDisplay(){
    display.textContent='';
    currentOperation='';
}

//OPERATIONS HANDLING
function opClicked(event){
    if(currentOperation =='')
    {
        currentOperation=event.target.textContent;
        display.textContent+=event.target.textContent;
    }
    else 
    {
        calculate();
        display.textContent+=event.target.textContent;
    }
}


//WRITES NUMBERS ON DISPLAY
function numberClicked(event)
{
    if (event.target && event.target.matches('button'))
    {
        display.textContent+=event.target.textContent;
    }
}

//DOES MATH DEPENDIND ON OPERATOR
function operate(num1,operator,num2){
switch(operator){
    case '+':
        return add(num1,num2);
        break;
    case '-':
        return sub(num1,num2);
        break;
    case 'X':
        return mult(num1,num2);
        break;
    case '/':
        return div(num1,num2);
        break;
    default: return clearDisplay();
    }
}



//MATH FUNCTIONS
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