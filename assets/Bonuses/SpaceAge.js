
function spaceAge(){

let seconds = Number(document.getElementById("ageInSeconds").value);
let toYears = seconds / 60 / 60 / 24 / 365.25;

let planeteer = document.getElementById("spaceTravel").selectedIndex;
let destination = document.getElementById("spaceTravel").getElementsByTagName("option")[planeteer];
let chosenPlanet = destination.value;
let element = document.getElementById("MySpaceAge");

    let planets = {
        "Mercury": "0.2408467",
        "Venus": "0.61519726",   
        "Earth": "1",
        "Mars": "1.8808158",
        "Jupiter": "11.862615"
    }

        switch (chosenPlanet){

            case "Mercury": 
            console.log(`You chose ${chosenPlanet}`);
            element.innerHTML = `Welcome on ${chosenPlanet} ! <br> Your age here is currently ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            element.style.color = "grey";
            break;

            case "Venus": 
            console.log(`You chose ${chosenPlanet}`);
            element.innerHTML = `Welcome on ${chosenPlanet} ! <br> Your age here is currently ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            element.style.color = "green";
            break;

            case "Earth": 
            console.log(`You chose ${chosenPlanet}`);
            element.innerHTML = `Welcome on ${chosenPlanet} ! <br> Your age here is currently ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            element.style.color = "blue";
            break;

            case "Mars": 
            console.log(`You chose ${chosenPlanet}`);
            element.innerHTML = `Welcome on ${chosenPlanet} ! <br> Your age here is currently ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            element.style.color = "red";
            break;

            case "Jupiter": 
            console.log(`You chose ${chosenPlanet}`);
            element.innerHTML = `Welcome on ${chosenPlanet} ! <br> Your age here is currently ${(Number(planets[chosenPlanet]) * toYears).toFixed(1)} years old.`;
            element.style.color = "yellow";
            break;

            default:
            console.log(`You didn't chose a planet... Are you from Pluton ?`);
            break;
            
        }
}