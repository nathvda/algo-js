const becodeTrainees = [ 
    "Arno Volts" ,
    "Aurélien Mariaule",
    "Aurore Lemaire",
    "Benjamin Porsont",
    "Céline Verreydt",
    "Corentin Miserque",
    "Dominique Coppée",
    "Edouard de Romrée de Vichenet",
    "Hugo Goorickx ",
    "Jofrey Houyoux",
    "Jonathan Manes",
    "jonathan bajoux",
    "Laura Wilhelmi",
    "Lysie Soyez",
    "Marnie Benalia",
    "Mathilde Cornelis",
    "Milo Bonnet",
    "Nadim El Nakadi",
    "Nathalie Vanden Abeele",
    "Nathalie Goffette",
    "Nour Everaert",
    "Pierre Mauriello",
    "Quentin Bource ",
    "Virginie Dourson"
];

function randNumber(a,b){

    let randomNumber = (Math.floor(Math.random() * (a - b + 1) + b));
    return randomNumber;
}

function multiRand(amount){

    const arrayNumbers = [];

    let i = 0;

    while (i < amount) {
        let numberRandom = randNumber(becodeTrainees.length, 1);
        arrayNumbers.push(numberRandom);
        i++;
    }

    return arrayNumbers;
}

function pickLearner(inputAr, n){

    let generatedRandom = multiRand(n);
    let selectedLearners = [];

   for ( let x of generatedRandom ){
        selectedLearners.push(becodeTrainees[x]);
    }

    return selectedLearners;
}


console.log(pickLearner(becodeTrainees, randNumber(becodeTrainees.length, 0)));
