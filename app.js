// import functions and grab DOM elements
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const addButton = document.getElementById('add-button');
const resultBox = document.getElementById('result-box');

//verification
// console.log(input1);
// console.log(input2);
// console.log(addButton);
// console.log(resultBox);

// initialize state

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    //verification
    // console.log('button pushed!');

    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = value1 + value2;

    //verification
    console.log(result);

    resultBox.textContent = result;
    

})