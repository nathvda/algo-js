
function spaceAge(){

let seconds = Number(document.getElementById("ageInSeconds").value);
let toYears = seconds / 60 / 60 / 24 / 365.25;

let planeteer = document.getElementById("spaceTravel").selectedIndex;
let destination = document.getElementsByTagName("option")[planeteer];
let chosenPlanet = destination.value;
let element = document.getElementById("MySpaceAge");

alert(destination.value);

    let planets = {
        "Mercury": "0.2408467",
        "Venus": "0.61519726",   
        "Earth": "1",
        "Mars": "1.8808158",
        "Jupiter": "11.862615"
    }

        switch (chosenPlanet){

            case "Mercury": 
            alert(`You chose ${chosenPlanet}`);
            element.innerHTML = `Your space Age is : ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            break;

            case "Venus": 
            alert(`You chose ${chosenPlanet}`);
            element.innerHTML = `Your space Age is : ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            break;

            case "Earth": 
            alert(`You chose ${chosenPlanet}`);
            element.innerHTML = `Your space Age is : ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            break;

            case "Mars": 
            alert(`You chose ${chosenPlanet}`);
            element.innerHTML = `Your space Age is : ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            break;

            case "Jupiter": 
            alert(`You chose ${chosenPlanet}`);
            element.innerHTML = `Your space Age is : ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            break;

            default:
            alert(`You didn't chose a planet... Are you from Pluton ?`);
            break;
            
        }
}