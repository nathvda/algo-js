function callAskTv(){
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

alert(JSON.stringify(askTvSeries()));
}