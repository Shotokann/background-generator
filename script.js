//1. Write code so that the colour inputs match the background generated on the first page load. 

//2. Display the initial CSS linear gradient property on page load.

//3. BONUS: Add a random button which generates two random numbers for the colour inputs.

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.getElementById("generateRandom");

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