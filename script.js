const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let operatorValue = "";
let awaitingNextValue = false;

function sendNumberValue(number) {
    // Replace current display value if first value is entered
    if (awaitingNextValue) {
        calculatorDisplay.textContent = number;
        awaitingNextValue = false;
    } else {
        // If current display value is 0, replace it, if not add number
        const displayValue = calculatorDisplay.textContent;
        calculatorDisplay.textContent =
            displayValue === "0" ? number : displayValue + number;
    }
}

function addDecimal() {
    // If operator pressed, don't add decimal
    if (awaitingNextValue) return;
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

function useOperator(operator) {
    const currentValue = Number(calculatorDisplay.textContent);
    // Assign firstValue if no value
    if (!firstValue) {
        firstValue = currentValue;
    } else {
        console.log("currentValue", currentValue);
    }
    // Ready for next value, store operator
    awaitingNextValue = true;
    operatorValue = operator;
    console.log("firstValue", firstValue);
    console.log("operatorValue", operatorValue);
}

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((button, index) => {
    if (button.classList.length === 0) {
        button.addEventListener("click", () => sendNumberValue(button.value));
    } else if (button.classList.contains("operator")) {
        button.addEventListener("click", () => useOperator(button.value));
    } else if (button.classList.contains("decimal")) {
        button.addEventListener("click", addDecimal);
    }
});

// Reset all values, display
function resetAll() {
    firstValue = 0;
    operatorValue = "";
    awaitingNextValue = false;
    calculatorDisplay.textContent = "0";
}

// Event Listener
clearBtn.addEventListener("click", resetAll);
