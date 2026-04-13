let expression = "";

let expressionDisplay = document.getElementById("expression");
let resultDisplay = document.getElementById("result");

function appendValue(value){
expression += value;
expressionDisplay.textContent = expression;
}

function clearDisplay(){
expression="";
expressionDisplay.textContent="";
resultDisplay.textContent="";
}

function calculate(){
try{
let result = eval(expression);
resultDisplay.textContent = result;
}catch{
resultDisplay.textContent="Error";
}
}