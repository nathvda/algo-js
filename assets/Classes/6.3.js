function rectangleGenerator(){
    let i = 0;
const rectangles = [];

while(i < 1000){

    let rectangle = new Rectangle(rand10(),rand10(),rand10(),rand10(),"blue");
    rectangles.push(rectangle);
    i++;
}

for(let displ of rectangles){

   i = 0;
   
   while(i < rectangles.length){

            console.log(displ.collides(rectangles[i]));
   i++;
   }
}
console.log(rectangles);

}
