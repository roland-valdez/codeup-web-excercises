"use strict";
//
// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//
function skippedNumber(){
    // Shorter code without break;
    // do {
    //     var input = Number(prompt("Enter an odd number between 1 and 50."));
    // }while ((input < 1 || input > 50) || input % 2 === 0);
    //
    // Previous code no break and longer
    //
    //    var input = Number(prompt("Enter an odd number between 1 and 50."));
    //
    //     while ((input < 1 || input > 50) || input % 2 === 0){
    //         var  input = Number(prompt("Enter an odd number between 1 and 50."));
    //     }

// Forced use of break
    while (true){
        var  input = Number(prompt("Enter an odd number between 1 and 50."));
        if ((input >= 1 && input <= 50) && input % 2 !== 0){
            break;
        }
    }


// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
//     Your output should look like this:
// Number to skip is: 27
//
// Here is an odd number: 1
// Here is an odd number: 3
// ..............
// Here is an odd number: 25
// Yikes! Skipping number: 27
// Here is an odd number: 29
// .................
// Here is an odd number: 49
//

// console.log("Number to skip is " + input + ".");
//     for (var i = 1; i <= 50; i++) {
//         if (input === i) {
//             console.log("Yikes! Skipping number: " + input);
//         }else if (i % 2 !== 0) {
//             console.log("Here is an odd number: " + i);
//         }
//     }

console.log("Number to skip is " + input + ".");
for (var i = 1; i <= 50; i = i + 2) {
    if (input === i) {
        console.log("Yikes! Skipping number: " + input);
        continue;
    }
        console.log("Here is an odd number: " + i);
    }
}
skippedNumber();