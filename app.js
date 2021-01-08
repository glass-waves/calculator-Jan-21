// import functions 
import {
    addClickHandler,
    subtractClickHandler,
    multiplyClickHandler,
    divideClickHandler 
} from './handlers.js';

//Grab DOM elements
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');
const multiplyButton = document.getElementById('multiply-button');
const divideButton = document.getElementById('divide-button');

// set event listeners to update DOM

//ADD BUTTON EVENT LISTENER
addButton.addEventListener('click', addClickHandler);

//SUBTRACT BUTTON EVENT LISTENER
subtractButton.addEventListener('click', subtractClickHandler);

//MULTIPLY BUTTON EVENT LISTENER
multiplyButton.addEventListener('click', multiplyClickHandler);

//DIVIDE BUTTON EVENT LISTENER
divideButton.addEventListener('click', divideClickHandler);


    