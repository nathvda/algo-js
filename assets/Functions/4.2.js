/**
 * rand10() : Displays a random number following a certain.
 *            Takes no arguments at the moment, but could
 *            be used to define a range later on.
 */
function rand10(){

    let randomNumber = (Math.floor(Math.random() * (10 - 1 + 1) + 1));
    console.log(randomNumber);

    return randomNumber;
}

