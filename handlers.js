//import math functions
import {
    addUtil,
    subtractUtil,
    multiplyUtil,
    divideUtil
} from './utils.js';


// input elements
const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');

//output elements
const resultBox = document.getElementById('result-box');
const operatorBox = document.getElementById('operator-box');
const errorBox = document.getElementById('error-box');

const errorMessage = 'Please enter two numbers!';

//click handler functions
export function addClickHandler() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = addUtil(value1, value2);
    resultBox.textContent = result;
    
    operatorBox.textContent = '+';
}

export function subtractClickHandler() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = subtractUtil(value1, value2);
    resultBox.textContent = result;
    
    operatorBox.textContent = '-';    
}

export function multiplyClickHandler() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = multiplyUtil(value1, value2);
    resultBox.textContent = result;
    
    operatorBox.textContent = '*';    
}

export function divideClickHandler() {
    const value1 = input1.valueAsNumber;
    const value2 = input2.valueAsNumber;

    const result = divideUtil(value1, value2);
    resultBox.textContent = result;
    
    operatorBox.textContent = '/';   
}