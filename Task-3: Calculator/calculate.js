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
        let result = eval(currentInput);
        if (typeof result === 'number' && !isNaN(result)) {
            const res = result.toFixed(1);
            document.getElementById("result").value = res;
            currentInput = res;
        } else {
            document.getElementById("result").value = "Error";
            currentInput = "";
        }
    } catch (error) {
        document.getElementById("result").value = "Error";
        currentInput = "";
    }
}
