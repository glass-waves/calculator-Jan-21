//Math functions
export function addUtil(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
    
}

export function subtractUtil(firstNumber, secondNumber) {
    const result = firstNumber - secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
}

export function multiplyUtil(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
}

export function divideUtil(firstNumber, secondNumber) {
    const result = firstNumber / secondNumber;
    if (result % 1 === 0) {
        return result;
    } else {
        return result.toFixed(2);
    }
}