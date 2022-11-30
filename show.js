function showBox(b){

b.classList.toggle("hidden");

}

// allows the user to select a color from the side of the screen.
function colorPicker(){

    // gets the values from the different ranges inputs
    let hue = document.getElementById("hue").value;
    let sat = document.getElementById("saturation").value;
    let lighting = document.getElementById("light").value;
   
    // creates a string with the color.
    let value = `hsl(${hue}, ${sat}%, ${lighting}%)`;

    // saves value in local storage
    localStorage.setItem("colorcheck", value);

    document.body.style.backgroundColor = value;
}

// gets background color value in local storage and applies it
function updateColor(){
    let bonjour = localStorage.getItem("colorcheck");
    document.body.style.backgroundColor = bonjour;
}

// calls updateColor on page load
window.addEventListener('load', updateColor());

const request = 'http://acnhapi.com/v1/fish';

const plop = document.getElementById('HAHA');

async function getACNH(animal){
    const response = await fetch(request);
    let myText = await response.json();

    let boxette = document.createElement("div");
    let fishy = document.createElement("img");
    let shoutOut = document.createElement("p");
    let blah = document.createTextNode(myText[`${animal}`]["catch-phrase"]);

    fishy.classList.add("potipoisson");
    shoutOut.classList.add("talkingFish");

    fishy.src = myText[`${animal}`]["icon_uri"];

    boxette.appendChild(fishy);
    shoutOut.appendChild(blah);
    boxette.appendChild(shoutOut);
    plop.appendChild(boxette);

    localStorage.setItem(`${animal}`,"true");
}

const listOfFish = ["bitterling","anchovy","pale_chub", "carp", "goldfish", "koi", "crucian_carp"];


function fishingGame(){
    let randomFish = Math.floor(Math.random() * listOfFish.length);
    console.log(randomFish);
    getACNH(listOfFish[randomFish]);
}



/*
.then( response => response.json())

.then( (storing) => {orangejuice = storing});

console.log(orangejuice);

console.log(typeof orangejuice); 
*/