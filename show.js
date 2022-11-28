function showBox(b){

b.classList.toggle("hidden");

}

function colorPicker(){

    let hue = document.getElementById("hue").value;
    let sat = document.getElementById("saturation").value;
    let lighting = document.getElementById("light").value;

    console.log(hue, sat, lighting);
    console.log(`hsl(${hue}, ${sat}%, ${lighting}%)`);

    document.body.style.backgroundColor = `hsl(${hue}, ${sat}%, ${lighting}%)`;

}
