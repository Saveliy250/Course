import {calculate} from "./math.js";

const firstNumberElementInput = document.querySelector('#firstNumber');
const secondNumberElementInput = document.querySelector('#secondNumber');
const operationSelector = document.querySelector('#operations');
const calculateButton = document.querySelector('#calculateButton');
const resultOutput = document.querySelector('#resultOutput');

calculateButton.addEventListener('click', () => {
    const a = Number(firstNumberElementInput.value);
    const b = Number(secondNumberElementInput.value);
    const operation = operationSelector.value;

    const result = calculate(a, b, operation);

    resultOutput.innerHTML = `<div id="resultOutput" class="result-output">Result: ${result}</div>`;
})

