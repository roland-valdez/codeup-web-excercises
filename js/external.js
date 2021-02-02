"use strict";

//var myAge = 25;

//alert("Hello from external JavaScript!");
alert("Welcome to my Website!");

var color =  prompt("What is you favorite color?");

alert("Great " + color + " is my favorite color too!");


var  sample	= "Hello Codeup";


alert(" The length of the string is " + sample.length);

alert("The text string to upper case is " + sample.toUpperCase());

alert("The test string to lower case is " + sample.toLowerCase());

alert(sample = sample.concat(' Student'));

alert(sample = sample.replace("Student", "Class"))
alert('The index of "c" is ' + sample.indexOf("c"));
alert('The index of "C" is ' + sample.indexOf("C"));
alert('The specified substring is ' + sample.substring(sample.indexOf("C"), 12));

/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and 
	Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?*/
var lm = 3, bb = 5, h = 1; 
var rent = 3;

var cost = (lm * rent) + (bb * rent) + (h * rent);
alert("What I need to pay for the rentals is $" + cost);

/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, 
	Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/
var goo = 400, am = 380, fb = 350; 
var fh = 10, gh = 6, ah = 4;

var pay = (goo * gh) + (am * ah) + (fb * fh);
alert("What I need to get paid work is $" + pay);

/* A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.*/
var full = confirm("Is the class full already?"); 
var con = confirm("Will the class time conflict with your current schedule?");

if (full === false && con === false){
	alert("You can register for the Class")
}else {
	alert("Can't join the class as you don't meet the requierments");
}

/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products*/
var prod = prompt("How many products are you buying?"); 
var mem = confirm("Are you a Premium member?");
var exp = confirm("Has your membership expired?") 


if (mem === true) {
	alert("You qualify for discount as a Premium member"); // from class you could do it all in one with: (prod || mem) && exp
}else if (prod > 2 && exp === false) {
	alert("You qualify for discount as a regular member");
}else {
	alert("You don' qualify for any discount");
}

/* Create a variable that holds a boolean value for each of the following conditions:
		the password must be at least 5 characters
		the password must not include the username
		the username must be no more than 20 characters
		neither the username or password can start or end with whitespace*/
var username = prompt("What is you username?");
var password = prompt("What is your password?");
var boolpass = 0, userpass = 0, size = 0, space = 0;

if (password.length >= 5){
	alert(password + " is a strong password")
	boolpass = true;
}else {
	alert(password + " is a weak password")
	boolpass = false;
}
if (password.replace(username, "") === password) {
	alert("Password and username combination are acceptable.")
		userpass = true;
}else {
	alert("Password can not include user name.")
		userpass = false;
}
if (username.length <= 20) {
	alert("You have the proper username length.")
	size = true;
}else {
	alert("You have too large of a username.")
	size  = false;
}

if (username != username.trim() || password != password.trim()) {
	alert("You have whitespace");
		space = true;

}else  {
	alert("There is no whitespace")
		space = false;
}