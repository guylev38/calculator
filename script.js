var calculatorScreenText = document.getElementById("screen-text");



// Basic Arithmetic Functions
function add(a, b) { return a+b; }
function subtract(a, b) { return a-b; }
function multiply(a, b) { return a*b; }
function divide(a,b) { return a/b; }

// Draw the calculator buttons
function drawButtons(){
  var buttons = document.getElementById("buttons");
  for(let i=1; i<10; i++) {
    var numberButton = document.createElement('button');
    numberButton.innerHTML = i;
    numberButton.addEventListener('click', function () {
      updateScreen(i);
    })
    buttons.appendChild(numberButton);
  }

  // Draw the 0 button last
  var numberButtonZero = document.createElement('button');
  numberButtonZero.innerHTML = 0;
  numberButtonZero.addEventListener('click', function () {
    updateScreen(0);
  })
  buttons.appendChild(numberButtonZero);

  // Draw the function buttons
  let functions = ['+', '-', 'x', '/', '='];
  for(let i=0; i<functions.length; i++){
    var functionButton = document.createElement('button');
    functionButton.innerHTML = functions[i];
    functionButton.id = functions[i];
    if(functions[i] != '='){
      functionButton.addEventListener('click', function() {
        updateScreen(functions[i]);
      });
    }
    buttons.appendChild(functionButton);
  }
}

function updateScreen(text){
  calculatorScreenText.innerHTML += text;
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

drawButtons();