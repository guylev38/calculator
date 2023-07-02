// Global Variables 
let screenBackText = document.querySelector("#back-text");
let screenFrontText = document.querySelector("#front-text");
let numberButtons = document.getElementsByClassName("num-btn");
let operatorButtons = document.getElementsByClassName("operator");

let currentOperator = "";
let firstNumber;
let secondNumber;
let isSolved = false;

function setupButtons(){
  // Number buttons
  for(let i=0; i<numberButtons.length; i++){
    numberButtons[i].addEventListener("click", () => {
      screenFrontText.textContent += numberButtons[i].textContent;
      if(isSolved == true) {
        clear();
        isSolved = false;
        screenFrontText.textContent += numberButtons[i].textContent;
      }
    });
  }

  // Operators
  for(let i=0; i<operatorButtons.length; i++){
    operatorButtons[i].addEventListener("click", () => {
      // Display on upper screen
      screenBackText.textContent += screenFrontText.textContent 
        + " " 
        + operatorButtons[i].textContent;
      
      // Set current operator and firstNumber
      if(isSolved == false && typeof(firstNumber) == 'number'){
        if(screenFrontText.textContent == "") 
          screenFrontText.textContent = '1';
        secondNumber = Number(screenFrontText.textContent);
        switch(currentOperator){
          case '+':
            screenBackText.textContent = String(add(firstNumber, secondNumber)) + " " + currentOperator;
            screenFrontText.textContent = add(firstNumber, secondNumber);
            break;
          case '-':
            screenBackText.textContent = String(subtract(firstNumber, secondNumber)) + " " + currentOperator; 
            screenFrontText.textContent = subtract(firstNumber, secondNumber);
            break;
          case 'X':
            screenBackText.textContent = String(multiply(firstNumber, secondNumber)) + "  " + currentOperator;
            screenFrontText.textContent = multiply(firstNumber, secondNumber);
            break;
          case '/':
            screenBackText.textContent = String(divide(firstNumber, secondNumber)) + " " + currentOperator;
            screenFrontText.textContent = divide(firstNumber, secondNumber);
            break;
          case '^':
            screenBackText.textContent = String(power(firstNumber, secondNumber)) + " " + currentOperator;
            screenFrontText.textContent = power(firstNumber, secondNumber);
            break;
        }
      }

      if(isSolved){
        currentOperator = operatorButtons[i].textContent;
        firstNumber = Number(screenFrontText.textContent);
        screenBackText.textContent = String(firstNumber) + " " + currentOperator;
        isSolved = false;
      }

      firstNumber = Number(screenFrontText.textContent);
      currentOperator = operatorButtons[i].textContent;
      screenFrontText.textContent = ""; // Clear the front text
      screenBackText.textContent = String(firstNumber) +  " " + currentOperator;
    });
  } 

  // floating point button
  document.getElementById("float-dot").addEventListener("click", () => {
    screenFrontText.textContent += ".";
  });


  // solve button
  document.getElementById("solve-btn").addEventListener("click", solve);

  // clear button clears everything
  document.getElementById("clear-btn").addEventListener("click", clear);

  // delete button removes last char
  document.getElementById("delete-btn").addEventListener("click", () => {
    screenFrontText.textContent = screenFrontText.textContent.slice(0, -1);
  });
}

function solve() {
  secondNumber = Number(screenFrontText.textContent);
  screenBackText.textContent += " " + secondNumber;
  screenFrontText.textContent = "";
  isSolved = true;
  switch(currentOperator){
    case '+':
      screenFrontText.textContent += add(firstNumber, secondNumber);
      break;
    case '-':
      screenFrontText.textContent = subtract(firstNumber, secondNumber);
      break;
    case 'X':
      screenFrontText.textContent = multiply(firstNumber, secondNumber);
      break;
    case '/':
      screenFrontText.textContent = divide(firstNumber, secondNumber);
      break;
    case '^':
      screenFrontText.textContent = power(firstNumber, secondNumber);
      break;
  }

  
}

function clear(){
  screenBackText.textContent = "";
  screenFrontText.textContent = "";
  currentOperator = "";
  firstNumber = "";
  secondNumber = "";
}
// Operator functions
function add(a, b){
  return a + b;
}

function subtract(a, b){
  return a - b;
}

function multiply(a, b){
  return a * b;
}

function divide(a, b) { 
  return a / b;
}

function power(a, b){
  return Math.pow(a, b);
}

// Load the setup functions
window.onload = () => {
  setupButtons();
}