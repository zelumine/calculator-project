    // Calculator functions 
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(arguments) {
 	return arguments.reduce((a, b) => a * b);
}

function operate(operator, a, b) {
    switch(operator) {
        case "+":
            console.log(add(a, b))
            return add(a, b);
            break;
        case "-":
            console.log(subtract(a, b));
            return subtract(a, b);
            break;
        case "x":
            console.log(multiply(a, b));
            return multiply(a, b);
            break;
        case "/":
            console.log(divide(a, b));
            return divide(a, b);
            break;
    }
}
    //End calculator functions

let calc = document.getElementById("calculator");
let buttons = Array.from(document.getElementsByTagName("button"));
let display = document.getElementById("display");
let numbersAndOperators = [];
let numbersArr = [];
let operatorsArr = [];
let num;
let displayText = document.createElement("p");

buttons.forEach( (button) => {
    button.addEventListener("click", (e) => {
        if(e.target.className === "operator") {
            numbersArr.push("");
            num = numbersArr.join("");
            numbersArr = [];
            console.log(numbersArr)
            console.log("num : " + num)
            numbersAndOperators.push(num);
            numbersAndOperators.push(e.target.textContent);
            //displayText.textContent = numbersAndOperators.join(" "); 
        } else if (e.target.className === "number") {
            numbersArr.push(e.target.textContent);
            displayText.textContent = numbersAndOperators.join(" "); 
        }
        console.log(numbersAndOperators);
        displayText.classList.add("display-items");
        display.appendChild(displayText);
    });
}); 





