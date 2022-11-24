class Rectangle{
    constructor(topLeftXpos,topLeftYpos,width,length,color){
        this.topLeftXpos = topLeftXpos;
        this.topLeftYpos = topLeftYpos;
        this.width = width;
        this.length = length;
        this.color = color;
    } 

    get collisionZone(){
    }

    collides(otherRectangle){
    }

}

let rectangle = new Rectangle(1,1,200,300,"blue");
let rectangle2 = new Rectangle(20,20,400,500,"orange");

document.body.innerHTML = `<div style="opacity:0.5;background-color:${rectangle.color};position:absolute;left:${rectangle.topLeftXpos}px;top:${rectangle.topLeftYpos}px;width:${rectangle.width}px;height:${rectangle.length}px;"></div><div style="opacity:0.5;background-color:${rectangle2.color};position:absolute;left:${rectangle2.topLeftXpos}px;top:${rectangle2.topLeftYpos}px;width:${rectangle2.width}px;height:${rectangle2.length}px;"></div>`;

console.log(rectangle);