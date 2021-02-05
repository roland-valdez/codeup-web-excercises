"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
/*
        #1
*/
function analyzeColor(color){
var message; // need to review the scope of this with instructor
    if (color === "blue"){
        message = "Blue is the color of the sky";
    }else if (color === "red"){
        message = "Strawberries are red";
    }else if (color === "cyan"){
        message = "I don't know anything about Cyan";
    }
    else {
        message = "I can't work with that color"
    }
    return message;
}
console.log(analyzeColor("blue"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
/*
        #2
*/
console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
/*
        #3
*/
function analyzeColor2(color) {// not sure if this is what you wanted to happen
    var message;
    switch (color) {
        case "blue":
            message = "Blue is the color of the sky";
            break;
        case "red":
            message = "Strawberries are red";
         break;
        case "cyan":
            message = "I don't know anything about Cyan";
            break;
        default:
        message = "I can't work with that color"
            break;
    }
    return message;
}
console.log(analyzeColor2(randomColor));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
/*
        #4
*/
var userColor = prompt("Choose a color.");
alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
/*
        #5
*/
var luckyNumber = Number(prompt("What is your lucky number?"));
var total = Number(prompt("What is the total of your purchase?"));

function calculatedTotal(luckyNumber, total) {
    var discountedTotal;
    switch (luckyNumber){
        case 0:
            discountedTotal = total;
            break;
        case 1:
            discountedTotal = total - (total * 0.1);
            break;
        case 2:
            discountedTotal = total - (total * 0.25);
            break;
        case 3:
            discountedTotal = total - (total * 0.35);
            break;
        case 4:
            discountedTotal = total - (total * 0.5);
            break;
        case 5:
            discountedTotal = 0;
            break;
        default:
            discountedTotal = 7000;
            break;
    }
    alert("Your discounted total is $" + discountedTotal + ".");

}

calculatedTotal(luckyNumber, total);


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
luckyNumber = Math.floor(Math.random() * 6);
/*
        #6
*/
var total = Number(prompt("What is the total of your purchase?"));
alert("Your lucky number was " + luckyNumber + ".");
alert("Your price before discount was $" + total + ".");
calculatedTotal(luckyNumber, total); // all this function does is output already in an alert format with the discounted total.
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
/*
        #7
*/
var answer = confirm("Would you like to enter a number?");

if (answer === true) {
    var number = Number(prompt("Enter your number."));
    if (isNaN(number) === false) {

        if (number % 2 === 0) {
            alert("The number you entered is even.");
        } else {
            alert("The number you entered is odd.");
        }

        var plus100 = number + 100;
        alert("The number you entered plus 100 is " + plus100 + ".");

        if (number < 0) {
            alert("The number you entered is negative.");
        } else {
            alert("The number you entered is positive.");
        }
    }else {
        alert("what you typed in is not a number goodbye.");
    }

}else if(answer === false) {
    alert("Sorry to have bothered you.");
}
/*
        #7 refactored
*/
function oddEven(number){
    if (number % 2 === 0) {
        alert("The number you entered is even.");
    } else {
        alert("The number you entered is odd.");
    }
}
function positiveNegative(number) {
    if (number < 0) {
        alert("The number you entered is negative.");
    } else {
        alert("The number you entered is positive.");
    }
}


var answer = confirm("Would you like to enter a number?");

if (answer === true) {
    var number = Number(prompt("Enter your number."));
    if (isNaN(number) === false) {

        oddEven(number);

        var plus100 = number + 100;
        alert("The number you entered plus 100 is " + plus100 + ".");

        positiveNegative(number);

    }else {
        alert("what you typed in is not a number goodbye.");
    }

}else if(answer === false) {
    alert("Sorry to have bothered you.")
}




