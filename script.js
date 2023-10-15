document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelector(".button-container");
    buttons.addEventListener("click", handleButtonClick);
    document.addEventListener("keydown", handleKeyPress);

    let currentInput = "";

    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        if (isNumeric(buttonValue) || "+-*/%".includes(buttonValue)) {
            currentInput += buttonValue;
            display.value = currentInput;
        } else if (buttonValue === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                alert("Invalid expression");
            }
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleButtonClick({ target: { textContent: "=" } });
        } else if (isNumeric(event.key) || "+-*/%".includes(event.key)) {
            currentInput += event.key;
            display.value = currentInput;
        } else if (event.key === "Escape") {
            currentInput = "";
            display.value = "";
        } else {
            alert("Only numbers are allowed");
        }
    }

    function isNumeric(value) {
        return /^-?\d*\.?\d*$/.test(value);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelector(".button-container");
    buttons.addEventListener("click", handleButtonClick);
    document.addEventListener("keydown", handleKeyPress);

    let currentInput = "";

    function handleButtonClick(event) {
        const buttonValue = event.target.textContent;

        if (isNumeric(buttonValue) || "+-*/%".includes(buttonValue)) {
            currentInput += buttonValue;
            display.value = currentInput;
        } else if (buttonValue === "=") {
            try {
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            } catch (error) {
                alert("Invalid expression");
            }
        } else if (event.target.id === "clear") {
            currentInput = "";
            display.value = "";
        } else if (event.target.id === "delete") {
            currentInput = currentInput.slice(0, -1); // Remove the last character
            display.value = currentInput;
        }
    }

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            handleButtonClick({ target: { textContent: "=" } });
        } else if (isNumeric(event.key) || "+-*/%".includes(event.key)) {
            currentInput += event.key;
            display.value = currentInput;
        } else if (event.key === "Escape") {
            currentInput = "";
            display.value = "";
        } else if (event.key === "Backspace") {
            currentInput = currentInput.slice(0, -1); // Remove the last character
            display.value = currentInput;
        } else {
            alert("Only numbers are allowed");
        }
    }

    function isNumeric(value) {
        return /^-?\d*\.?\d*$/.test(value);
    }
});
