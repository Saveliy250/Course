function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b
}
function subtraction(a, b) {
    return a - b;
}

const OPERATIONS = {
    "+": sum,
    "-": subtraction,
    "*": multiply,
    "/": divide,
}

export function calculate (a, b, operation) {
    return OPERATIONS[operation](a, b);
}