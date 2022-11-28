
function AmIAdult(){
    let userAge = prompt("What is your age ?");
    let coconut = document.getElementById('badge');

    if (userAge >= 18) {
        alert("You are an adult and you earned a ripe coconut!");
        console.log("You are an adult and you earned a ripe coconut!");
        coconut.src = "./assets/SVG/Coconut.svg";
    } else {
        alert("You are not yet an adult... Here's a green coconut for you.");
        console.log("You are not yet an adult");
        coconut.src = "./assets/SVG/GreenCoco.svg";
    }
}