/**  DOCUMENTATION 
 * calcSurface() : calculates the surface of a rectangle.;
 * 
 * a parameter is the width of the rectangle, b is the length of it.
 * */

let width = parseInt(prompt("Width of your rectangle"));
let length = parseInt(prompt("Length of your rectangle"));

function calcSurface(a, b){
    return a*b;
}

console.log(calcSurface(width, length));
