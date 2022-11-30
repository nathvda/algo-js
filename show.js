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

/* const request = new Request('http://acnhapi.com/v1/fish');
const requete = new Request('http://www.lights-camera-action.org/');

const url = request.url;
const method = request.method;
const credentials = request.credentials;
const bodyUsed = request.bodyUsed;

console.log(requete);

fetch(request)
.then( x => x.text())
.then( y => document.getElementById('HAHA').innerHTML = y);

console.log(request); */
