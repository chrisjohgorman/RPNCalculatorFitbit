import document from 'document'
import { me as device } from "device";
import Interactions from './interactions'
import RPNCalculatorModel from './rpncalculator'

// evil device detection
// if the screen is ionic-sized we assume ionic, otherwise we assume versa
const deviceType = (!device.screen || device.screen.width == 348 && device.screen.height == 250) ? 'Ionic' : 'Versa';
const maxDigits  = (device == 'Ionic') ? 6 : 7;

// FIXME should use screen size to determine what watch we're wearing
let interactions = new Interactions('Versa');
let calc = new RPNCalculatorModel(6);

// document elements
const numberDisplayEl = document.getElementById("numberDisplay");

// on startup, make the calculator update the display
numberDisplayEl.text = calc.getDisplay();

// register event listener for button presses
interactions.onbuttonpress = (buttonStr) => {
  calc.buttonInput(buttonStr);
  numberDisplayEl.text = calc.getDisplay();
};
