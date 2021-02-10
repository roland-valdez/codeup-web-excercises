"use strict";

function skippedNumber(){
    var input = Number(prompt("Enter an odd number between 1 and 50."));
    while ((input < 1 || input > 50) || input % 2 === 0){

        input = Number(prompt("Enter an odd number between 1 and 50."));
    }

    for (var i = 1; i <= 50; i++) {
        if (input === i) {
            console.log("Yikes! Skipping number: " + input);
        }else if (i % 2 !== 0) {
            console.log("Here is an odd number: " + i);
        }
    }
}
skippedNumber();