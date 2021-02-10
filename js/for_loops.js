"use strict";
function showMultiplicationTable(){
    var input = prompt("What number would you like to show the multiplication table for?");

    for (var i = 1; i < 11; i++){
        console.log(input + " X " + i + " = " + (input * i));
    }
}
showMultiplicationTable();
function randomNumber(){
    for (var i = 1; i < 11; i++) {
       var randomness =  Math.floor(Math.random() * 181) + 20;
       if ( randomness % 2 === 0){
           console.log(randomness + " is even");
       }else{
           console.log(randomness + " is odd");
       }
    }
}
randomNumber();

function numberPyramid(){
    for (var i = 1; i < 10; i++){
        var output = "";
        for (var j = 1;j <= i; j++){
            output = output.concat(i);
        }
        console.log(output);
    }
}
numberPyramid();
function decrease100(){
    for (var i = 100; i >= 5; i--){
        if (i % 5 === 0) {
            console.log(i);
        }
    }
}
decrease100();