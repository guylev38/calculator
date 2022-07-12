var numberButtons = document.querySelectorAll('.number-button');
var functionButtons = document.querySelectorAll('.function-button');
var calcScreen = document.getElementById('screen-text');
var calcBackgroundScreen = document.getElementById('background-text');

var solveButton = document.getElementById('solve');
solveButton.addEventListener('click', () => {
  addNumber(calcScreen.textContent);
  setScreenText(solve(numbers[0], numbers[1], operator));
  updateBackgroundScreen(numbers[1]);
  isSolved = true;
});

var clearButton = document.getElementById('clear-btn');
clearButton.onclick = clearCalc;

var delButton = document.getElementById('delete-btn');
delButton.onclick = delNumber;

var numbers = [];
var operator = '';
var isSolved = false;

numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if(isSolved){
      resetGlobals();
      clearScreen();
      clearBackgroundScreen();
      isSolved = false;
    }
    updateScreen(button.textContent);

  });
});

functionButtons.forEach((button) => {
  button.addEventListener('click', () => {  
    functionButtonSetup(button);
  });
});


function functionButtonSetup(button){
  addNumber(calcScreen.textContent);
  let prevOperator = operator;
  operator = button.textContent;
  if(numbers.length >= 2){
    numbers[0] = solve(numbers[0], numbers[1], prevOperator);
    numbers = numbers.slice(0,-1);
    clearBackgroundScreen();
    setBackgroundScreenText(numbers[0] + ' ');
  } else {
    updateBackgroundScreen(calcScreen.textContent);
  }
  updateBackgroundScreen(operator);
  clearScreen();
}


// Utility Functions
function addNumber(num){ numbers[numbers.length] = parseFloat(num); }

function resetGlobals(){
  numbers = [];
  operator = '';
}

function clearCalc(){
  clearScreen()
  clearBackgroundScreen();
  resetGlobals();
}

// Screen Functions
function updateScreen(text){ calcScreen.textContent += text; }
function setScreenText(text){ calcScreen.textContent = text; }
function clearScreen(){ calcScreen.textContent = ''; }
function updateBackgroundScreen(text){ calcBackgroundScreen.textContent += text + ' '; }
function setBackgroundScreenText(text) { calcBackgroundScreen.textContent = text; }
function clearBackgroundScreen(){ calcBackgroundScreen.textContent = ''; }
function delNumber(){ calcScreen.textContent = calcScreen.textContent.slice(0,-1); }

// Math Stuff
function add(a,b){ return parseFloat(a) + parseFloat(b); }
function subtract(a,b){ return parseFloat(a) - parseFloat(b); }
function multiply(a,b){ return parseFloat(a) * parseFloat(b); }
function divide(a,b){ return parseFloat(a) / parseFloat(b); }

function solve(a, b, operator){
  if(operator == '+') return add(a, b);
  else if(operator == '-') return subtract(a, b);
  else if(operator == 'x') return multiply(a, b);
  else if(operator == '/' && b != 0) return divide(a, b);
  else alert("Error!");
}  
