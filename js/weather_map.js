"use strict";
$(document).ready(function () {

// ************* DISPLAY MAP ON LOAD - Default to San Antonio ******************
    var coord = [29.4241, -98.4936]; // lat[0] long[1] standard format
    var city = "San Antonio, TX"//SA coordinates in Mapbox format
    mapboxgl.accessToken = mapboxToken;
    var mapOptions = {
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [coord[1], coord[0]], // San Antonio
        zoom: 9.7// captures all of 1604 Loop
    }
    var map = new mapboxgl.Map(mapOptions);
    var marker = new mapboxgl.Marker({color: "red", draggable: true})
        .setLngLat([coord[1], coord[0]])
        .addTo(map);
    getWeather(coord);
    marker.on('dragend', onDragEnd);

// ************* GET WEATHER ******************
    function getWeather(coord) {
        findCity(coord);
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lon: coord[1],
            lat: coord[0],
            exclude: "hourly,minutely,alerts",
            appid: open_weatherToken,
            units: "imperial"
        }).done(function (results) {
            displayWeather(results);
        });
    }

// ************* GET CITY FROM LAT LONG ******************
    function findCity(coord) {
        $.get("https://api.openweathermap.org/data/2.5/forecast", {
            lon: coord[1],
            lat: coord[0],
            appid: open_weatherToken,
            units: "imperial"
        }).done(function (results) {
            city = results.city.name;
            $(".city").html("<h6>Current city: " + city + "</h6>").css("color","black");
        });
    }

// // ************* GET LOCATION FROM SEARCH BOX******************

    $("#weatherBtn").click(search);
    function search(e) {
        e.preventDefault();
        map = new mapboxgl.Map(mapOptions);
        geocode($("#weatherLocation").val(), mapboxToken).then(function (results) {
            mapOptions.center = results;
            coord = [results[1], results[0]];// in open weather format for getWeather()
            map.flyTo({center: results, zoom: 9.7, duration: 5000})
            marker = new mapboxgl.Marker({color: "red", draggable: true})
                .setLngLat(results)
                .addTo(map);
            marker.on('dragend', onDragEnd);
            getWeather(coord);
        });
    }


// ************* GET LOCATION FROM MARKER DRAG ******************
    function onDragEnd() {
        coord = marker.getLngLat();
        map.flyTo({center: coord, duration: 1000});
        coord = [coord.lat, coord.lng];

        getWeather(coord);
    }

// ************* DISPLAY WEATHER ******************

    function displayWeather(results) {

        var dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        //**************** FORECAST WEATHER **********************
        var i = 0;
        $(".date").each(function () {
            var utcSeconds = results.daily[i].dt;
            var day = new Date(0); // The 0 there is the key, which sets the date to the epoch
            day.setUTCSeconds(utcSeconds);
            $(this).html("<h6>" + dayofWeek[day.getDay()] + "</h6><h6>" + month[day.getMonth()] + " " + day.getDate() + "</h6>");
            i++;
        });
        $(".icons").each(function (i) {
            var weatherIcon = results.daily[i].weather[0].icon;
            $(this).html("<img class='weatherIcon card-img-top' src='http://openweathermap.org/img/wn/" + weatherIcon + ".png' alt='day'>");
            if (i == 0 ){
               var weatherMain = results.daily[0].weather[0].main;
                if (weatherMain === "Rain" || weatherMain === "Drizzle") {
                    $(".video").html("<source src='video/rain.mp4'>");
                }
                else if (weatherMain === "Snow") {
                    $(".video").html("<source src='video/snow.mp4'>");
                }
                else if (weatherIcon === "50d") {
                    $(".video").html("<source src='video/fog.mp4'>");
                }
                else if (weatherMain === "Thunderstorm") {
                    $(".video").html("<source src='video/thunder.mp4'>");
                }
                else if (weatherMain === "Clear") {
                    $(".video").html("<source src='video/clear.mp4'>");
                }
                else if (weatherMain === "Clouds") {
                    $(".video").html("<source src='video/cloudy.mp4'>");
                }
                document.getElementById("myvideo").load();
            }
        });
        $(".weather").each(function (i) {
            $(this).html("<h6>Min temp: " + Math.round(results.daily[i].temp.min) + "&#8457;</h6>");
        })
        $(".high").each(function (i) {
            $(this).html("<h6>Max temp: " + Math.round(results.daily[i].temp.max) + "&#8457;</h6>");
        });
    }
});




"use strict";

/*****************************
 *    VAR VS. LET VS. CONST
 *****************************/

function checkWeather(isRaining) {
    if (isRaining) {
        var umbrella = "Get an umbrella"
    } else {
        var sunglasses = "Grab your glasses!"
        console.log(umbrella);
    }

}

//checkWeather(false); //Undefined



function checkWeatherTwo(isRaining) {
    const condition = "Sunny";
    if (isRaining) {
        const umbrella = "Get an umbrella"
    } else {
        const sunglasses = "Grab your glasses!"
        //sunglasses = "Got mine!"; //won't work
        console.log(umbrella);
    }

}

//checkWeatherTwo(false) //ReferenceError: umbrella is not defined


/*==============================================*/


// let instructor = 'Douglas';
// instructor = 'Kenneth';
// console.log(instructor); //Kenneth




//const instructor = 'Douglas';
// console.log(instructor); // Douglas
// instructor = 'Kenneth';
// console.log(instructor); // Uncaught TypeError: Assignment to constant variable.








/*==============================================*/




/*
* let and const (block scope vs. function scope)
*/

{
    var a = 10;
}
{
    let b = 20;
    //console.log("I'm in a block " + b)
}

const c = 30;

//console.log(a); // 10
//console.log(b); // Uncaught ReferenceError: b is not defined
//console.log(c += 3); //Uncaught TypeError: Assignment to constant variable.





/*==============================================*/




// if (false) {
//    var x = 2; //Undefined
// }
// const instructor = "Douglas";
// if (true) {
//     const otherInstructor = "Kenneth";
// }
//
// if (true) {
//     let x = 2; //Uncaught ReferenceError: x is not defined
//     console.log("I'm in the if statement. " + x) // I can use it in the block.
//     console.log(instructor);
//     //console.log(otherInstructor);
//     for(let i = 0; i < 10; i++) {
//         x = x * 2; // I can access variables in scopes above me.
//         console.log("in a loop " + x);
//     }
// }

//console.log(x); // I can't see it because I'm not in the block.



/*****************************
 *    Template Strings
 *****************************/

//oldway
let firstName = "Douglas";
let lastName = "Hirsh";
let greeting = "Hello my name is " + firstName + ' ' + lastName + '.';

console.log(greeting);

//TODO: Refactor code from above, using template strings.
let newGreeting = `Hello my name is ${firstName} ${lastName}. ${1+2}`

console.log(newGreeting);

let aLetter = `Hi Marco,
This is a letter with multiple lines. Hope you enjoy template strings.

--Douglas
`;

//console.log(aLetter);









/*==============================================*/

//TODO: Create an HTML string that contains the following items in an unordered list

let items = ['apple', 'grape', 'orange'];


//old way
let itemsHtml = "";
itemsHtml += "<ul>";
itemsHtml += "<li>" + items[0]+ "</li>"
itemsHtml += "<li>" + items[1]+ "</li>"
itemsHtml += "<li>" + items[2]+ "</li>"
itemsHtml += "</ul>";

//console.log(itemsHtml);


//new way
let newItemsHtml = `
    <ul>
        <li>${items[0]}</li>
        <li>${items[1]}</li>
        <li>${items[2]}</li>
    </ul>
`;

//console.log(newItemsHtml);


/*==============================================*/

//TODO: Create a paragraph from the following program object

let program = {
    name: "Codeup",
    location: "Dallas and San Antonio",
    length: "22 weeks",
    technology: "HTML, CSS, JS, Java"
}

let programLetter = `Hello and thank for your interest in ${program.name}!
Our program is located in ${program.location}. The program lasts ${program.length}.
`

//console.log(programLetter);






/*****************************
 *       For Of Loops
 *****************************/


// const arr = ["one", "two", "three"];
// for (let ele of arr) {
//     console.log(ele);
// }





/*==============================================*/
//TODO: Using for of loops, log each day

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

// for(let day of days) {
//     console.log(day);
// }

/*==============================================*/

//TODO: Using for of loops, log each instructors name

const instructors = ["Douglas", "Kenneth", "Justin", "Casey", "David"]

// for(let instructor of instructors) {
//     console.log(instructor);
// }


/* ****************************
 *       Arrow Functions
 *****************************/
//TODO TOGETHER: Rewrite the following function using arrow function syntax


function sayHello(name){
    return `Hello ${name}`;
}

//V1
//let sayHelloAgain = (name) => {return `Hello, ${name}!`};

//V2
//let sayHelloAgain = (name) => `Hello, ${name}!`;

//V3
let sayHelloAgain = name => `Hello, ${name}!`;

console.log(sayHelloAgain("Douglas")); //Hello Douglas
console.log(sayHelloAgain("Justin")); //Hello Justin
console.log(sayHelloAgain("Kenneth")); //Hello Kenneth



/*==============================================*/
//TODO TOGETHER: Rewrite the following function using arrow function syntax

// function sum(a,b){
// 	return a + b;
// }

let sum = (a, b) => a + b;



console.log(sum(5, 3)); //8
console.log(sum(5, 20)); //25
console.log(sum(1, 9)); //10




/*==============================================*/
//TODO: Rewrite the following function using arrow function syntax

//Function declaration
function addOne(arg1) {
    return arg1 + 1;
}


//function expression
let addOneA = function(arg1){
    return arg1 + 1;
}


//refactor. Remove function keyword and add =>
let addOneB = (arg1) => {
    return arg1 + 1;
}

// remove curly braces (if only one statement)
let addOneC = (arg1) => arg1 + 1;

//remove parens if only 1 input
const addOneD = arg1 => arg1 + 1;






// console.log(addOne(1));
// console.log(addOneA(2));
// console.log(addOneB(2));
// console.log(addOneC(3));
// console.log(addOneD(5));






/* ****************************
 *       Default Function
 *       Parameter Values
 *****************************/
//TODO Together: Refactor the following using ES6

// old way
function sayHello(name) {
    if (typeof name === 'undefined') {
        name = 'World';
    }

    return 'Hello, ' + name + '!';
}

let sayHello2 = (name = "World") => `Hello, ${name}!`

let sum2 = (a = 0, b = 0) => a + b;

// console.log(sayHello2(undefined));
// console.log(sayHello2(null));
// console.log(sayHello2()); // "Hello, World!"
// console.log(sayHello2("")); // "Hello, ??????!"
// console.log(sayHello2('codeup')); // "Hello, codeup!"
//
// console.log('Default values for numbers', sum2(5));

// let abc;
// console.log(abc);
// console.log(typeof abc);
// abc = 5;
// console.log(typeof abc);
/*==============================================*/

// TODO: Refactor the following function using arrow syntax, default function parameter values, and template strings.

// function helloCohort(greeting, cohort){
//     if(typeof greeting === "undefined"){
//         greeting = "Good Morning";
//     }
//     if(typeof cohort === "undefined"){
//         cohort = "Marco";
//     }
//
//     return greeting + " " + cohort;
// }

const helloCohort = (greeting = "Good Morning", cohort = "Marco") => `${greeting} ${cohort}`;

console.log(helloCohort("Hello,", "Oberon"));