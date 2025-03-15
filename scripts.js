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
    updateResults(".");

});

addBTN.addEventListener("click", () => {
    console.log("ADD!");
    updateResults("+");

});

subtractBTN.addEventListener("click", () => {
    console.log("SUBTRACT!");
    updateResults("-");

});

multiplyBTN.addEventListener("click", () => {
    console.log("MULTIPLY!");
    updateResults("x");

});

divideBTN.addEventListener("click", () => {
    console.log("DIVIDE!");
    updateResults("/");

});

equalsBTN.addEventListener("click", () => {
    console.log("EQUALS!");
    updateResults("=");

});

clearBTN.addEventListener("click", () => {
    console.log("CLEAR!");
    clearResults();
});





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