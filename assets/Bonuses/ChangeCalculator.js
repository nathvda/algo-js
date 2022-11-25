let toPay = Number(prompt("How much do you owe me ?"));
let money = Number(prompt("How much would you like to pay"));

function computeChange(price, moneyHanded){

    let changeGiven = [];

    let bankNotes = [500,200,100,50,20,10,5];
    let euroCoins = [2,1,0.5,0.2,0.1,0.05,0.02,0.01];
    

    if( price > moneyHanded || price < 0 || moneyHanded < 0 || isNaN(price) || isNaN(moneyHanded) ){
     
        alert("Don't try to cheat.");
        return changeGiven; 

    } else {

        let changeDue = moneyHanded - price;
        console.log(changeDue);

        let i = 0;


        while(changeDue > 0 || i < 6){

                let next;
                if (i < 6){
                    next = `${bankNotes[i+1]} bills`;
                } else {
                    next = "coins.";
                }


             if ((changeDue % bankNotes[i]) == 0){
                let amount = Number(changeDue / bankNotes[i]); 
                changeGiven.push(amount);
                changeDue -= amount * bankNotes[i];
                return changeGiven;
             } else {
                let amount = Number(changeDue / bankNotes[i]).toFixed(0); 
                console.log(amount);
                console.log(changeGiven);

                if( (amount * bankNotes[i]) > changeDue ){ 
                    changeDue -= (amount-1) * bankNotes[i];
                    console.log(`Not enough for change, let's try ${next}.`);
                    changeGiven.push(amount-1);
                } else if (amount == 0) {
                     console.log(`Looks like I can't give you any ${bankNotes[i]} bills for that`);
                }  else {
                    changeDue -= amount * bankNotes[i];
                    console.log(`Here's your change, how much more do I owe you ? I'll go to ${next}`);
                    changeGiven.push(amount);
                }     
                
                console.log(changeDue);
             }
i++
        }
      
        return;
    }

}