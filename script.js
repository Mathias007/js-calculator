const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

function sendNumberValue(number) {
    // If current display value is 0, replace it, if not add number
    const displayValue = calculatorDisplay.textContent;

    calculatorDisplay.textContent =
        displayValue === "0" ? number : displayValue + number;
}

function addDecimal() {
    // If no decimal, add one
    if (!calculatorDisplay.textContent.includes(".")) {
        calculatorDisplay.textContent = `${calculatorDisplay.textContent}.`;
    }
}

// Add Event Listeners for numbers, operators, decimal buttons
inputBtns.forEach((button, index) => {
    if (button.classList.length === 0) {
        button.addEventListener("click", () => sendNumberValue(button.value));
    } else if (button.classList.contains("operator")) {
        button.addEventListener("click", () => sendNumberValue(button.value));
    } else if (button.classList.contains("decimal")) {
        button.addEventListener("click", addDecimal);
    }
});

// Reset display
function resetAll() {
    calculatorDisplay.textContent = "0";
}

// Event Listener
clearBtn.addEventListener("click", resetAll);
