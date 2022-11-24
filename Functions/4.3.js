/**
 * rand10() : Displays a random number following a certain.
 *            Takes no arguments at the moment, but could
 *            be used to define a range later on.
 * multiRand(amount) : generates an array from a length 
 *            "amount" containing randomly generated 
 *            numbers from the rand10() function. 
 */

// generating random numbers from 1 to 10;
function rand10(){
    let randomNumber = (Math.floor(Math.random() * (10 - 1 + 1) + 1));
    return randomNumber;
}

// Asking for user input.
let n = parseInt(prompt("Please, enter the number of random numbers you wish"));

// Creating an array of "amount" numbers.
function multiRand(amount){

    const arrayNumbers = [];

    let i = 0;

    while (i < amount) {
        let numberRandom = rand10();
        arrayNumbers.push(numberRandom);
        i++;
    }

    return arrayNumbers;
}

console.log(multiRand(n));
