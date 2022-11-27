function moneyCall(){

let toPay = Number(prompt("How much do you owe me ?"));
let money = Number(prompt("How much would you like to pay"));

function computeChange(price, moneyHanded){

    let changeGiven = [];
    let bankNotes = [500,200,100,50,20,10,5,2,1,Number(0.5),Number(0.2),Number(0.1),Number(0.05),Number(0.02),Number(0.01)];
    

    if( price > moneyHanded || price <= 0 || moneyHanded <= 0 || isNaN(price) || isNaN(moneyHanded)){
     
        alert("Don't try to cheat.");
        return changeGiven; 

    } else {

        let changeDue = (moneyHanded - price).toFixed(2);
        console.log(changeDue);

        let i = 0;

        while(changeDue > 0){

                let next;
                    if (i < 6){
                        next = `${bankNotes[i+1]} bills`;
                        current =  "bills";
                    } else {
                        next = `${bankNotes[i+1]} coins`;
                    }

             if ((changeDue % bankNotes[i]) == 0){

                let amount = Number(changeDue / bankNotes[i]);
                changeGiven.push(amount);
                changeDue -= amount * bankNotes[i];
                console.log("All done!");

            } else {

                    let amount = Number(changeDue / bankNotes[i]).toFixed(0); 
                    console.log(amount);
                    console.log(changeGiven);

                    if (amount == 0) {
                        console.log(`Looks like I can't give you any ${bankNotes[i]} ${current} for that`);
                        changeGiven.push(amount);

                    } else if( (amount * bankNotes[i]) > changeDue ){ 
                        changeDue -= (amount-1) * bankNotes[i];
                        console.log(`Not enough for change, let's try ${next}.`);
                        changeGiven.push(amount-1);
                  
                    }  else if ((amount * bankNotes[i]) == changeDue ) {
                            console.log(`... ${bankNotes[i]} ${current} for that`);
                            changeDue -= amount * bankNotes[i];
                            changeGiven.push(amount);
                           
                           } else {
                            console.log(`Here's your change, how much more do I owe you ? I'll go to ${next}`);
                            changeGiven.push(amount);
                            changeDue -= amount * bankNotes[i];  
                        }     
            }
            
            i++;


        }
      
        console.log(changeDue);   
        console.log(changeGiven);

        let sellerTalk = "For this, I'll give you ";

        let x = 0;
        
      while(x < (changeGiven.length-1)){
            if (changeGiven[x] == 0){
            } else {
                sellerTalk += changeGiven[x] + " " + bankNotes[x];
          
               
           if (x < 7 || changeGiven[x] > 1){
                sellerTalk += ` bills `;

                } else {
                sellerTalk += `coins`;
                }
                
            }

        console.log(sellerTalk);
        x++; 

        }

    sellerTalk += `. I wish you a very good day!`;
    alert(sellerTalk);
    }
}

computeChange(toPay, money);

}
