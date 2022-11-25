/**
 * DOCUMENTATION
 * 
 * Factorialization is n * n-1 * n-1 * n-1 * until the number reaches one.
 * So the function needs to call its own argument but minus one.
 * 
 * 
 */

function callFactorial(){

let q = Number(prompt("Quel nombre doit on factorialiser?"));

function factorial(a){

    if (a < 0){

        return -1;

    } else if (a == 0){

        return 1;

    } else { return (a * factorial(a-1));
    
    }

}

console.log(factorial(q));
}