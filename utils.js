//Math functions

//addition
export function addUtil(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
    
}

//subtraction
export function subtractUtil(firstNumber, secondNumber) {
    const result = firstNumber - secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
}

//multiplication
export function multiplyUtil(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
}

//division
export function divideUtil(firstNumber, secondNumber) {
    const result = firstNumber / secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
}