class Circle {
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface(){
        return Math.PI*Math.pow(this.radius,2);
    }
}

function generateCircles(){

let circle1 = new Circle(12,23,25);
let circle2 = new Circle(15,15,19);
console.log(circle1);
console.log(circle2);

circle1.move(-20,-20);
console.log(circle1);
console.log(circle1.surface);

circle2.move(20,20);
console.log(circle2);
console.log(circle2.surface);
}

