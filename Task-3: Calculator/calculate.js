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
        let result;
        if (currentInput.includes('+')) {
            const operands = currentInput.split('+');
            if (operands.length === 2) {
                result = parseFloat(operands[0]) + parseFloat(operands[1]);
            }
        } else if (currentInput.includes('-')) {
            const operands = currentInput.split('-');
            if (operands.length === 2) {
                result = parseFloat(operands[0]) - parseFloat(operands[1]);
            }
        } else if (currentInput.includes('*')) {
            const operands = currentInput.split('*');
            if (operands.length === 2) {
                result = parseFloat(operands[0]) * parseFloat(operands[1]);
            }
        } else if (currentInput.includes('/')) {
            const operands = currentInput.split('/');
            if (operands.length === 2) {
                result = parseFloat(operands[0]) / parseFloat(operands[1]);
            }
        }
        if (typeof result === 'number' && !isNaN(result)) {
            const resultWithTwoDecimals = result.toFixed(1);
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
