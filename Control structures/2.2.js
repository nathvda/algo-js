let min = prompt("Enter a minimum number");
let max = prompt("Enter a maximum number");

if (min > max) {
    
    console.log("I must sincerly apologize, but I think you don't have a clear understanding of this. Goobye.");

} else {

    let current = prompt("Enter a new number");
    
    if ( min <= current <= max ) {

        console.log(` ${current} is between ${min} and ${max}`);
     
    }   else {
            console.log(` ${current} is not ${min} and ${max}`);
        }
}