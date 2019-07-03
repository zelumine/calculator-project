    // Calculator functions 
function add(arr) {
	return arr.reduce((a, b) => a + b);
}

function subtract(arr) {
	return arr.reduce((a, b) => a - b);
}

function divide(arr) {
    return arr.reduce((a, b) => a / b);
}

function multiply(arr) {
 	return arr.reduce((a, b) => a * b);
}

function operate(operator, arr) {
    switch(operator) {
        case "+":
            return add(arr);
            break;
        case "-":
            return subtract(arr);
            break;
        case "x":
            return multiply(arr);
            break;
        case "/":
            return divide(arr);
            break;
    }
} 
    //End calculator functions

let calc = document.getElementById("calculator");
let buttons = Array.from(document.getElementsByTagName("button"));
let decimalButton = document.getElementById("decimal");
let backspaceButton = document.getElementById("backspace");
let clearButton = document.getElementById("clear");
let displayArea = document.getElementById("display");
let numbersAndOperators = [];
let numbersArr = [];
let num;
let displayText = document.createElement("p");
let resultOperator = document.getElementById("result");
let result;
let resultArr = [];

buttons.forEach( (button) => {
    button.addEventListener("click", displayFunc);
}); 


function displayFunc(e) {
    displayArea.textContent = "";

    if(e.target.className === "operator") {
        displayText.textContent += " " + e.target.textContent + " ";
        num = numbersArr.join("");
        resultArr.push(+num);
        decimalButton.addEventListener("click", displayFunc);
        numbersArr = [];
        numbersAndOperators.push(+num);
        numbersAndOperators.push(e.target.textContent);
    } else if (e.target.className === "number") {
        numbersArr.push(e.target.textContent);
        displayText.textContent += e.target.textContent;
        if(numbersArr.indexOf(".") !== -1) {
            decimalButton.removeEventListener("click", displayFunc);
        }
    }
    displayArea.appendChild(displayText);
}

// For now it works when it's the same operator
resultOperator.addEventListener("click", () => {
    result = operate(numbersAndOperators[1], resultArr);
    if(Number.isInteger(result)) {
        displayText.textContent = result;
    } else {
        displayText.textContent = result.toFixed(2);
    }
});

backspaceButton.addEventListener("click", () => {
    displayText.textContent = numbersAndOperators.join(" ");
    numbersArr.splice(numbersArr.length-1, 1);
    displayText.textContent += numbersArr;
});

clearButton.addEventListener("click", () => {
    num = "";
    numbersArr = [];
    numbersAndOperators = [];
    resultArr = [];
    displayText.textContent = 0;
});
