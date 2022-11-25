function answerToEverything(){


  let userInput = parseInt(prompt("Give me your favorite number"));

  while (userInput !== 42){
    console.log("Are you sure?");
    userInput = parseInt(prompt("Give me your favorite number"));
    }
  }