const startArray = ["Pomme", "Poires", "Pêches"];
const duplicateArray = [];

for (let elem of startArray){
    duplicateArray.push(elem);
}
console.log(duplicateArray);


const duplicateArrayDeux = Array.from(startArray);

console.log(duplicateArrayDeux);