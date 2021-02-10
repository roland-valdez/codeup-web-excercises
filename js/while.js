"use strict";
function log(){
    var i = 1;
    while (i < 17){
        console.log(Math.pow(2, i));
        i++;
    }
}

log();

function icecreamSell() {

    // This is how you get a random number between 50 and 100
    var allCones = Math.floor(Math.random() * 50) + 50;

    do{
        // This expression will generate a random number between 1 and 5
       var conesSold =  Math.floor(Math.random() * 5) + 1;
       if (conesSold > allCones){
           console.log("Cannot sell you " + conesSold + " as I only have " + allCones + " left.");
           continue;
       }
        console.log(conesSold + " cones sold...");
        allCones = allCones - conesSold;
    }while (allCones > 0);

    console.log("Yay! I sold them all!");

}
icecreamSell();