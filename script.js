var calculatorScreenText = document.getElementById("screen-text");

// Basic Arithmetic Functions
function add(a, b) { return a+b; }
function subtract(a, b) { return a-b; }
function multiply(a, b) { return a*b; }
function divide(a,b) { return a/b; }

function setupButtons(){
  var buttons = document.getElementById("regular-buttons").children;
  for(let i=0; i<buttons.length; i++){
    if(buttons[i].className == "function-button" && buttons[i].id != "equals") {
      buttons[i].addEventListener('click', function () {
        updateScreen(buttons[i].innerHTML);
      });
    } else if(buttons[i].className == "number-button"){
      buttons[i].addEventListener('click' , function () {
        updateScreen(buttons[i].id);
      });
    }
  }

  var clearButton = document.getElementById("clear-btn");
  clearButton.addEventListener('click', clearScreen);

}

// Screen Functions
function updateScreen(text){
  calculatorScreenText.innerHTML += text;
}

function clearScreen(){
  calculatorScreenText.innerHTML = '';
}



// Return the result of the math operation
function operate(a,b,operator){
  switch(operator){
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case 'x':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return null;
  }
}

setupButtons();