let currentInput = "";

function clearInput() {
    document.getElementById("result").value = "";
    currentInput = "";
}

function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById("result").value = currentInput;
}

function appendToInput(value) {
    currentInput += value;
    document.getElementById("result").value = currentInput;
}

function calculate() {
    try {
        const result = eval(currentInput);
        if (typeof result === 'number' && !isNaN(result)) {
            const resultWithTwoDecimals = result.toFixed(2);
            document.getElementById("result").value = resultWithTwoDecimals;
            currentInput = resultWithTwoDecimals;
        } else {
            document.getElementById("result").value = "Error";
            currentInput = "";
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
        currentInput = "";
    }
}