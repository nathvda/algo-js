/**
 * 
 * DOCUMENTATION
 * 
 * calcDistance         : calculates a distance from coordinates.
 *                        it uses the pythagorean theorem to calculate the
 *                        distance between two points.
 *                         
 *  
 */

let aX = 1;
let aY = 1;
let bX = 2;
let bY = 2;

function calcDistance(lat1,lat2,lon1,lon2){
   let delX = lat2 - lat1;
   let delY = lon2- lon1;

  let powX = Math.pow(delX,2);
  let powY = Math.pow(delY,2);

  return Math.sqrt(powX + powY);
}

console.log(calcDistance(aX, bX, aY, bY));

aX = 1;
aY = 1;
bX = 3;
bY = 1;

console.log(calcDistance(aX, bX, aY, bY));

aX = 4;
aY = 1;
bX = 1;
bY = 1;

console.log(calcDistance(aX, bX, aY, bY));

aX = -2;
aY = 2;
bX = 2;
bY = -2;

console.log(calcDistance(aX, bX, aY, bY));



