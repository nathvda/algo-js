function whoAmI(){
let name = document.getElementById("nomFamille").value;
let firstName = document.getElementById("prenom").value;
let city = document.getElementById("ville").value;

let Welcome = document.getElementById("WelcomeText");

if (name == "" || firstName == "" || city == ""){
    Welcome.innerHTML = `Are you trying to hide something from me ? Come on, fill in the form.`;
    Welcome.style.fontWeight = "bolder";
} else {
console.log(`Your name is ${firstName} ${name} and you live in ${city}`);

Welcome.innerHTML = `Your name is ${firstName} ${name} and you live in ${city}`;

}
}