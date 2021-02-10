"use strict";
// function showMultiplicationTable(){
//     var input = prompt("What number would you like to show the multiplication table for?");
//
//     for (var i = 1; i < 11; i++){
//         console.log(input + " X " + i + " = " + (input * i));
//     }
// }
// showMultiplicationTable();
function randomNumber(){
    for (var i = 1; i < 11; i++) {
       var randomness =  Math.floor(Math.random() * 180) + 20;
       if ( randomness % 2 === 0){
           console.log(randomness + " is even");
       }else{
           console.log(randomness + " is odd");
       }
    }
}
randomNumber();