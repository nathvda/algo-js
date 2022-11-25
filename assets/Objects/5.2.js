function callRandomTv(){
    function askTvSeries(){
const persontv = {};

persontv.favoriteSeries = prompt("what is your favorite series?");
persontv.productionYear = prompt("What is it's production year");

let p = parseInt(prompt("How many cast members you do want to add?"));

persontv.castmember = addtvcast(p);

return persontv;

}


function addtvcast(p){
     let i = 0; 
     let b = [];

   while (i < p){
        const castmember = {};
        castmember.firstname = prompt(`name of castmember ${i+1}`);
        console.log(castmember.firstname);
        b.push(castmember);

                i++;

            }
            return b;
    }
                    
function randNumber(a,b){

    let randomNumber = (Math.floor(Math.random() * (a - b + 1) + b));
    return randomNumber;
}

function randomizeCast(tvSerie){
    
    const newCast = [];
    let n;
    let i = 0;

    while (i < tvSerie.castmember.length){
   
        n = randNumber(tvSerie.castmember.length-1,0);
        //console.log(n);

        if (newCast.includes(tvSerie.castmember[n].firstname)){
            continue;
        } else {
            newCast.push(tvSerie.castmember[n].firstname);
        }

        i++;
    }
    console.log(tvSerie);
    console.log(newCast);

    return newCast;

}

const myserie = askTvSeries();

alert(randomizeCast(myserie));

}
