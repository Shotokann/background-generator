
let _ = require('lodash');  //FOr use with Broswerify. You first need browserify (npm install -g browserify), then run 'browserify script.js > bundle.js', then change html page to use bundle.js instead of script.js
//import { without } from 'lodash'; //modern way of using/importing files/methods 

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer: ', _.without(array, 3));
let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let random = document.getElementById("generateRandom");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

    setCssTextContent(color1.value, color2.value);
}

function setCssTextContent() {
    css.textContent = body.style.background + ";";
}

function setRandomGradient() {
    for (index = 0; index < 2; index++) {
        var letters = '0123456789ABCDEF';
        var color = '#';

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        if (index === 0) {
            color1.value = color;
        }
        else {
            color2.value = color;
        }
    }
    setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomGradient);

setGradient();