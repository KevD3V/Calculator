/**
 * References to HTML Elements
 */

const oneBTN = document.querySelector("#one");
const twoBTN = document.querySelector("#two");
const threeBTN = document.querySelector("#three");
const fourBTN = document.querySelector("#four");
const fiveBTN = document.querySelector("#five");
const sixBTN = document.querySelector("#six");
const sevenBTN = document.querySelector("#seven");
const eightBTN = document.querySelector("#eight");
const nineBTN = document.querySelector("#nine");
const zeroBTN = document.querySelector("#zero");

const addBTN = document.querySelector("#add");
const subtractBTN = document.querySelector("#subtract");
const multiplyBTN = document.querySelector("#multiply");
const divideBTN = document.querySelector("#divide");

const decimalBTN = document.querySelector("#decimal");
const clearBTN = document.querySelector("#clear");
const equalsBTN = document.querySelector("#equals");

const results = document.querySelector("#results");

/**
 * Add Event Listeners
 */

oneBTN.addEventListener("click", () => {
    console.log("ONE!");
    updateResults("1");

});

twoBTN.addEventListener("click", () => {
    console.log("TWO!");
    updateResults("2");

});

threeBTN.addEventListener("click", () => {
    console.log("THREE!");
    updateResults("3");

});

fourBTN.addEventListener("click", () => {
    console.log("FOUR!");
    updateResults("4");

});

fiveBTN.addEventListener("click", () => {
    console.log("FIVE!");
    updateResults("5");

});

sixBTN.addEventListener("click", () => {
    console.log("SIX!");
    updateResults("6");

});

sevenBTN.addEventListener("click", () => {
    console.log("SEVEN!");
    updateResults("7");

});

eightBTN.addEventListener("click", () => {
    console.log("EIGHT!");
    updateResults("8");

});

nineBTN.addEventListener("click", () => {
    console.log("NINE!");
    updateResults("9");

});

zeroBTN.addEventListener("click", () => {
    console.log("ZERO!");
    updateResults("0");
});

decimalBTN.addEventListener("click", () => {
    console.log("POINT!");
    if (checkDecimal(results.textContent)) {
        // Do Nothing

    }
    else {
        updateResults(".");
    }


});

addBTN.addEventListener("click", () => {
    console.log("ADD!");
    if (checkAddition(results.textContent)) {
        // Do Nothing
    }
    else {
        getFirstValue();
        updateResults("+");
        operation = "+"
    }


});

subtractBTN.addEventListener("click", () => {
    console.log("SUBTRACT!");

    if (checkSubtraction(results.textContent)) {
        // Do Nothing
    }
    else {
        getFirstValue();
        operation = "-";
        updateResults("-");
    }
});

multiplyBTN.addEventListener("click", () => {
    console.log("MULTIPLY!");

    if (checkMultiplication(results.textContent)) {
        // Do Nothing
    }
    else {
        getFirstValue();
        operation = "x";
        updateResults("x");
    }
});

divideBTN.addEventListener("click", () => {
    console.log("DIVIDE!");

    if (checkDivision(results.textContent)) {
        // Do Nothing
    }
    else {
        getFirstValue();
        updateResults("/");
        operation = "/"
    }
});

equalsBTN.addEventListener("click", () => {
    console.log("EQUALS!");

    getSecondValue();

    resultText = operate(operation);

    results.textContent = resultText;

    console.log("First Value: " + firstValue);
    console.log("Operation: " + operation);
    console.log("Second Value: " + secondValue);
    console.log("Final Results: " + operate(operation));

    clearVariables();


});

clearBTN.addEventListener("click", () => {
    console.log("CLEAR!");
    clearResults();
});

/**
 * Groups
 */

let numbers = [oneBTN, twoBTN, threeBTN, fourBTN, fiveBTN, sixBTN, sevenBTN, eightBTN, nineBTN, zeroBTN];
let operations = [addBTN, subtractBTN, multiplyBTN, divideBTN];


/**
 * Calculator variables
 */
// Variable to track which operation is happening. 
let operation = "";

// Variables to track values to perform operations on.
let firstValue = 0;
let secondValue = 0;
let finalValue = 0;

/**
 * Update the results text with value of updateText;
 */
function updateResults(updateText) {
    results.textContent += updateText;
}

/**
 * Clear the results text area
 */
function clearResults() {
    results.textContent = "";
}

/**
 * Capture first value.
 * First value is captured when operation is selected.
 */
function getFirstValue() {
    firstValue = Number(results.textContent);
}

/**
 * Capture second value
 */
function getSecondValue() {

    let tempIndex = results.textContent.indexOf(operation);
    tempIndex++;
    secondValue = Number(results.textContent.substring(tempIndex));
}

/**
 * Check Value for correct input
 */
function checkValue() {

}


/**
 * Capture operator
 */
function operate(operation) {
    switch (operation) {
        case "+":
            return firstValue + secondValue;
            break;
        case "-":
            return firstValue - secondValue;
            break;
        case "x":
            return firstValue * secondValue;
            break;
        case "/":
            return firstValue / secondValue;
            break;
    }
}



/**
 * Clear variables
 */
function clearVariables() {
    firstValue = 0;
    secondValue = 0;
    finalValue = 0;

    operation = "";
}

/**
 * Check for existing decimal points to avoid entering multiple decimal points.
 */
function checkDecimal(decString) {
    let decCheck = decString.includes(".");

    return decCheck;
}

/**
 * Check for existing multiplication in display
 */
function checkMultiplication(multiplyString) {
    let multiplyCheck = multiplyString.includes("x");
    return multiplyCheck;
}

/**
 * Check for existing subtraction in display
 */
function checkSubtraction(subtractString) {
    let subtractCheck = subtractString.includes("-");
    return subtractCheck;
}

/**
 * Check for existing addition in display
 */
function checkAddition(addString) {
    let addCheck = addString.includes("+");
    return addCheck;
}

/**
 * Check for existing division in display
 */
function checkDivision(divString) {
    let divCheck = divString.includes("/");
    return divCheck;
}