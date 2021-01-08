// import functions and grab DOM elements
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');
const resultBox = document.getElementById('result-box');
const operatorBox = document.getElementById('operator-box');

//verification
// console.log(input1);
// console.log(input2);
// console.log(addButton);
// console.log(resultBox);

// initialize state

// set event listeners to update state and DOM

//ADD
addButton.addEventListener('click', () => {
    //verification
    // console.log('button pushed!');

    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = value1 + value2;
    resultBox.textContent = result;

    operatorBox.textContent = '+';
});

//SUBTRACT
subtractButton.addEventListener('click', () => {
    //verification
    // console.log('button pushed!');

    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = value1 - value2;
    resultBox.textContent = result;

    operatorBox.textContent = '-';
});

//MULTIPLY
multiplyButton.addEventListener('click', () => {
    //verification
    // console.log('button pushed!');

    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = value1 * value2;
    resultBox.textContent = result;

    operatorBox.textContent = '*';
});

//DIVIDE
divideButton.addEventListener('click', () => {
    //verification
    // console.log('button pushed!');

    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = value1 / value2;
    resultBox.textContent = result;

    operatorBox.textContent = '/';
});

    