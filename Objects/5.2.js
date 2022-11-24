function askTvSeries(){
    const persontv = {};

persontv.favoriteSeries = prompt("what is your favorite series?");
persontv.productionYear = prompt("What is it's production year");

let p = parseInt(prompt("How many cast members you do want to add?"));
persontv.castmember = addtvcast(p);

        function addtvcast(p){
        let i = 0; 
        let b = [];

            while (i < p){
                    const castmember = {};
                    castmember.firstname = prompt(`name of castmember ${i+1}`);
                    b.push(castmember);
                    i++;
                }
            return b;
            };

            return persontv;
}

function randNumber(a,b){

    let randomNumber = (Math.floor(Math.random() * (a - b + 1) + b));
    return randomNumber;
}

const myserie = askTvSeries();

function randomizeCast(tvSerie){
    
    const newCast = [];
    let n;
    let i = 0;

    while (i < tvSerie.castmember.length){
   
        n = randNumber(tvSerie.castmember.length-1,0);

        if (newCast.includes(tvSerie.castmember[n].firstname)){
           continue;
        } else {
            newCast.push(tvSerie.castmember[n].firstname);
        }

        i++;
    }
    
    return newCast;
}

alert(randomizeCast(myserie));