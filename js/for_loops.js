"use strict";
//
//Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)
//For example, showMultiplicationTable(7) should output
//  7 x 1 = 7
//  7 x 2 = 14
//  7 x 3 = 21
//  7 x 4 = 28
//  7 x 5 = 35
//  7 x 6 = 42
//  7 x 7 = 49
//  7 x 8 = 56
//  7 x 9 = 63
//  7 x 10 = 70
//
function showMultiplicationTable(){
    var input = prompt("What number would you like to show the multiplication table for?");

    for (var i = 1; i < 11; i++){
        console.log(input + " X " + i + " = " + (input * i));
    }
}
showMultiplicationTable();
//
// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:
//  123 is odd
//  80 is even
//  24 is even
//  199 is odd
//  ...
//
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
//
// Create a for loop that uses console.log to create the output shown below.
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
//
function numberPyramid() {
    for (var i = 1; i < 10; i++){
        var output = "";
        for (var j = 1; j <= i; j++){
            output = output.concat(i);
        }
        console.log(output);
    }
}
numberPyramid();
//
// Create a for loop that uses console.log to create the output shown below.
//     100
//     95
//     90
//     85
//     80
//     75
//     70
//     65
//     60
//     55
//     50
//     45
//     40
//     35
//     30
//     25
//     20
//     15
//     10
//     5
//
function decrease100(){
    for (var i = 100; i >= 5; i = i -5){
       console.log(i);
    }
}
decrease100();