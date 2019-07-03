// Variables
let buttons = Array.from(document.getElementsByTagName("button"));
let decimalButton = document.getElementById("decimal");
let backspaceButton = document.getElementById("backspace");
let clearButton = document.getElementById("clear");
let resultButton = document.getElementById("result");
let displayArea = document.getElementById("display");
let displayText = document.createElement("p");
let num;
let result;
let numbersAndOperators = [];
let numbersArr = [];
let resultArr = [];
// End variables

// Functions 
function add(arr) {
	return arr.reduce((a, b) => a + b);
}

function subtract(arr) {
	return arr.reduce((a, b) => a - b);
}

function divide(arr) {
    return arr.reduce((a, b) => {
        if(b === 0) {
            alert("But... why...?! Try something else, please.");
            clear();
            return result = 0;
        } else {
            return a / b;
        }
    });
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

function resultFunc() {
    if(numbersAndOperators[1] !== numbersAndOperators[3] && numbersAndOperators[3] !== "=") {
        console.log("operator 1 : " + numbersAndOperators[1] + " operator 2 : " + numbersAndOperators[3]);
    } else {
        result = operate(numbersAndOperators[1], resultArr);
    }
    Number.isInteger(result) ? displayText.textContent = result : displayText.textContent = result.toFixed(2);
}

function clear() {
    num = "";
    numbersArr = [];
    numbersAndOperators = [];
    resultArr = [];
    displayText.textContent = 0;
}
//End functions


// Events
buttons.forEach( (button) => {
    button.addEventListener("click", displayFunc);
}); 

    // For now it works when it's the same operator
resultButton.addEventListener("click", resultFunc);

backspaceButton.addEventListener("click", () => {
    displayText.textContent = numbersAndOperators.join(" ");
    numbersArr.splice(numbersArr.length-1, 1);
    displayText.textContent += numbersArr;
});

clearButton.addEventListener("click", clear);
// End events