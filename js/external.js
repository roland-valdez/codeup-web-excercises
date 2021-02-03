"use strict";

// #1
alert("Hello from external JavaScript!");
alert("Welcome to my Website!");

//#2
var favoriteColor =  prompt("What is you favorite color?");
alert("Great " + favoriteColor + " is my favorite color too!");

// #3 - Excercise three from previous lesson

/* You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and 
	Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?*/
var littleMermaid = prompt("How many days did you rent the little mermaid for?");
var brotherBear = prompt("Hoe many days did you rent Brother Bear for?");
var hercules= prompt("How many days did you rent Hercules for?");
var rent = prompt("What was the daily rental cost?");


var cost = (littleMermaid * rent) + (brotherBear * rent) + (hercules* rent);
var cost = cost.toFixed(2);
alert("Your rental for the all the movies for your given information is $" + cost + ".");

/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, 
	Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.*/
var googlePay = prompt("What is your pay rate at your Google job?");
var googleHours = prompt("How many hours did you work at Google?");

var	amazon= prompt("What is your pay rate at your Amazon job?") ;
var amazonHours = prompt("How many hours did you work at Amazon?");

var	facebook = prompt("What is your pay rate at your Facebook job?");
var facebookHours = prompt("How many hours did you work at Facebook?");

var pay = (googlePay * googleHours) + (amazon* amazonHours) + (facebook * facebookHours);
var pay  = pay.toFixed(2);
alert("For this pay period you should be paid $" + pay + " for all the jobs you have.");

/* A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.*/
var classFull = confirm("Is the class your are applying for full already?");
var classConflict= confirm("Will the class time conflict with your current schedule?");

if (classFull === false && classConflict=== false){
	alert("Congratulations you can register for the class!")
}else {
	alert("Can't join the class as you don't meet the requirements.");
}

/* A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products*/
var howManyProducts = prompt("How many products are you buying?"); 
var isPremiumMember= confirm("Are you a Premium member?");
var expiredOffer = confirm("Has the product offer expired?")


if (isPremiumMember=== true) {
	alert("You qualify for discount as a Premium member!"); // from class you could do it all in one with: (howManyProducts|| mem) && exp
}else if (howManyProducts > 2 && expiredOffer === false) {
	alert("You qualify for discount as the offer is still valid and due to the number of products you are purchasing!");
}else {
	alert("You don' qualify for any discount. Sorry.");
}


/* #4 as requested to complete by Samuel
Create a variable that holds a boolean value for each of the following conditions:
		the password must be at least 5 characters
		the password must not include the username
		the username must be no more than 20 characters
		neither the username or password can start or end with whitespace */
var username = prompt("What is you username?");
var password = prompt("What is your password?");
//var boolpass = 0, userpass = 0, size = 0, space = 0;

if (password.length >= 5){
	alert(password + " is a strong password")
	//boolpass = true;
}else {
	alert(password + " is a weak password")
	boolpass = false;
}
if (password.replace(username, "") === password) {
	alert("Password and username combination are acceptable.")
		//userpass = true;
}else {
	alert("Password can not include user name.")
		//userpass = false;
}
if (username.length <= 20) {
	alert("You have the proper username length.")
	//size = true;
}else {
	alert("You have too large of a username.")
	//size  = false;
}

if (username != username.trim() || password != password.trim()) {
	alert("You have whitespace in your username or password.");
		space = true;

}else  {
	alert("There is no whitespace in your username or password.")
		space = false;
}