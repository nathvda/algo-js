function addNumbers(){

let n = parseInt(prompt("Enter a number"));
let sum = 0; 

let i = 0;
while (i < n){
   let newNumber = parseInt(prompt("Enter a new number " + `${i+1}`));
   sum += newNumber;
   i++;
}

console.log(sum);

}


