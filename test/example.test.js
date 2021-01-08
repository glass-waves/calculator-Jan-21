// IMPORT MODULES under test here:
import { addUtil, subtractUtil, multiplyUtil, divideUtil } from '../utils.js';

const test = QUnit.test;

//addUtil Tests
test('it should return 10 when provided with 3 and 7', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = addUtil(3, 7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return -14 when provided with -6 and -8', (expect) => {

    const expected = -14;

    const actual = addUtil(-6, -8);
    expect.equal(actual, expected);
});

//subtractUtil tests
test('it should return 3 when provided with 10 and 7', (expect) => {

    const expected = 3;

    const actual = subtractUtil(10, 7);
    expect.equal(actual, expected);
});
test('it should return 2 when provided with -6 and -8', (expect) => {

    const expected = 2;

    const actual = subtractUtil(-6, -8);
    expect.equal(actual, expected);
});

//multiplyUtils tests
test('it should return 12 when provided with 3 and 4', (expect) => {

    const expected = 12;

    const actual = multiplyUtil(3, 4);
    expect.equal(actual, expected);
});
test('it should return -20 when provided with -5 and 4', (expect) => {

    const expected = -20;

    const actual = multiplyUtil(-5, 4);
    expect.equal(actual, expected);
});

//divideUtils tests
test('it should return 3.33 when provided with 10 and 3', (expect) => {

    const expected = 3.33;

    const actual = divideUtil(10, 3);
    expect.equal(actual, expected);
});
test('it should return -2 when provided with 16 and -8', (expect) => {

    const expected = -2;

    const actual = divideUtil(16, -8);
    expect.equal(actual, expected);
});

