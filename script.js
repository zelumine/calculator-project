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
            console.log(add(arr))
            return add(arr);
            break;
        case "-":
            console.log(subtract(arr));
            return subtract(arr);
            break;
        case "x":
            console.log(multiply(arr));
            return multiply(arr);
            break;
        case "/":
            console.log(divide(arr));
            return divide(arr);
            break;
    }
} 
    //End calculator functions

let calc = document.getElementById("calculator");
let buttons = Array.from(document.getElementsByTagName("button"));
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
        resultArr.push(parseInt(num, 10));
        numbersArr = [];
        numbersAndOperators.push(parseInt(num, 10));
        numbersAndOperators.push(e.target.textContent);
    } else if (e.target.className === "number") {
        numbersArr.push(e.target.textContent);
        displayText.textContent += e.target.textContent;
    }
    display.appendChild(displayText);
}

// For now it works when it's the same operator
resultOperator.addEventListener("click", (e) => {
    result = operate(numbersAndOperators[1], resultArr);
    displayText.textContent = result;
});


