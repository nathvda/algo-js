function addArray(){

let arrayTest = [1, 2, 3, 4, 5];
let sum = 0;

for(let elem of arrayTest){
    sum += elem;
}

console.log(sum);

arrayTest = [100, 101, 102];
sum = 0;

for(let elem of arrayTest){
    sum += elem;
}

console.log(sum);

}