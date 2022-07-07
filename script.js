var calculatorScreenText = document.getElementById("screen-text");
var firstNumber = 0;
var secondNumber = 0;
var operator = '';

var equalButton = document.getElementById("equals");
equalButton.onclick = function () {
  secondNumber = calculatorScreenText.innerHTML;
  clearScreen();
  operate(firstNumber,secondNumber,operator);
  resetNumbers();
}

function resetNumbers() {
  firstNumber = 0;
  secondNumber = 0;
  operator = '';
}

// Basic Arithmetic Functions
function add(a, b) { return parseFloat(a) + parseFloat(b); }
function subtract(a, b) { return parseFloat(a) - parseFloat(b); }
function multiply(a, b) { return parseFloat(a) * parseFloat(b); }
function divide(a, b) { return parseFloat(a) / parseFloat(b); }


// Return the result of the math operation
function operate(a,b,operator){ 
  if(operator == "plus") calculatorScreenText.innerHTML = add(a,b);
  else if(operator == "minus") calculatorScreenText.innerHTML = subtract(a,b);
  else if(operator == "multiply") calculatorScreenText.innerHTML = multiply(a,b);
  else if(operator == "divide") calculatorScreenText.innerHTML = divide(a,b);
  else calculatorScreenText.innerHTML = "error";
}

function setupButtons(){
  var buttons = document.getElementById("regular-buttons").children;
  for(let i=0; i<buttons.length; i++){
    if(buttons[i].className == "number-button"){
      buttons[i].addEventListener('click' , function () {
        updateScreen(buttons[i].id);
      });
    }

    else if(buttons[i].className == "function-button" && buttons[i].id != "equals"){
      buttons[i].addEventListener('click', function () {
        firstNumber = calculatorScreenText.innerHTML;
        operator = buttons[i].id;
        clearScreen();
      });
    }
  }

  var clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener('click', clearScreen);

  var deleteButton = document.getElementById("delete-btn");
  deleteButton.addEventListener('click', deleteChar);
}

// Screen Functions
function updateScreen(text){
  calculatorScreenText.innerHTML += text;
}

function clearScreen(){
  calculatorScreenText.innerHTML = '';
}

function deleteChar(){
  var screenText = calculatorScreenText.innerHTML;
  calculatorScreenText.innerHTML = screenText.slice(0, -1);
}

setupButtons();