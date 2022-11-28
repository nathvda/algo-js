class Rectangle{
    constructor(topLeftXpos,topLeftYpos,width,length,color){
        this.topLeftXpos = topLeftXpos;
        this.topLeftYpos = topLeftYpos;
        this.width = width;
        this.length = length;
        this.color = color;
    } 

    collides(otherRectangle){
        if ( 
            this.topLeftXpos < otherRectangle.topLeftXpos + otherRectangle.width &&
            this.topLeftXpos + this.width > otherRectangle.topLeftXpos &&
            this.topLeftYpos < otherRectangle.topLeftYpos + otherRectangle.length &&
            this.length + this.topLeftYpos > otherRectangle.topLeftYpos )
            {
                return true; 
            } else    { 
                return  false;
            }
    }

}

function createRectangles(){

let rectangle = new Rectangle(1,1,200,300,"blue");
let rectangle2 = new Rectangle(150,150,400,500,"orange");
let rectangle3 = new Rectangle(8,15,20,80,"purple");
let rectangle4 = new Rectangle(700,250,450,560,"green");


document.body.innerHTML += `<div style="opacity:0.5;background-color:${rectangle.color};position:absolute;left:${rectangle.topLeftXpos}px;top:${rectangle.topLeftYpos}px;width:${rectangle.width}px;height:${rectangle.length}px;"></div>`;
document.body.innerHTML +=`<div style="opacity:0.5;background-color:${rectangle2.color};position:absolute;left:${rectangle2.topLeftXpos}px;top:${rectangle2.topLeftYpos}px;width:${rectangle2.width}px;height:${rectangle2.length}px;"></div>`;
document.body.innerHTML +=`<div style="opacity:0.5;background-color:${rectangle3.color};position:absolute;left:${rectangle3.topLeftXpos}px;top:${rectangle3.topLeftYpos}px;width:${rectangle3.width}px;height:${rectangle3.length}px;"></div>`;
document.body.innerHTML +=`<div style="opacity:0.5;background-color:${rectangle4.color};position:absolute;left:${rectangle4.topLeftXpos}px;top:${rectangle4.topLeftYpos}px;width:${rectangle4.width}px;height:${rectangle4.length}px;"></div>`;

console.log(rectangle);
console.log(rectangle2);

console.log(rectangle.collides(rectangle2));
console.log(rectangle2.collides(rectangle4));
console.log(rectangle.collides(rectangle4));
console.log(rectangle2.collides(rectangle3));
}