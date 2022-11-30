function calculation(){
   
    let firstNumber = Number(document.getElementById("firstNumber").value);
    let secondNumber = Number(document.getElementById("secondNumber").value); 
    let selector = document.getElementById("operand").selectedIndex;
    let choix = document.getElementsByTagName("option")[selector];
    let indice = choix.value;
    let element = document.getElementById("resultCal");

        switch (indice) {
            case "add": 
            console.log(firstNumber + secondNumber);
            element.innerHTML = firstNumber + secondNumber ;
            break;
            case "subst": 
            console.log(firstNumber - secondNumber);
            element.innerHTML = firstNumber - secondNumber ;
            break;
            case "div": 
            console.log(firstNumber / secondNumber);
            element.innerHTML = firstNumber / secondNumber ;
            break;
            case "mult": 
            console.log(firstNumber * secondNumber);
            element.innerHTML = firstNumber * secondNumber ;
            break;
            case "mod": 
            console.log(firstNumber % secondNumber);
            element.innerHTML = firstNumber % secondNumber ;
            break;
            default: 
            console.log("You didn't choose an operand");
            element.innerHTML = "You didn't choose an operand";
            break;
        }
}