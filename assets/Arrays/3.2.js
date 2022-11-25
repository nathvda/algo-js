function averageArray(){

let arrayTest = [1, 2, 3, 4, 5];
let sum = 0;

for(let elem of arrayTest){
    sum += elem;
}

let Average = sum/(arrayTest.length);
console.log(Average);

arrayTest = [100, 101, 102];
sum = 0;

for(let elem of arrayTest){
    sum += elem;
}

Average = sum/(arrayTest.length);
console.log(Average);
}