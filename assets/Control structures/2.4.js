function checkEvenOddMult(){

    let b = 1;
    while (b <= 100){
        let x = b%2;

        if ( x == 0 ){
            console.log(b/2);
        } else { 
            console.log(b*3);  
        }
    b++;
    }
}