(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var planetsLineBreak = planetsArray.join("<br>");
    console.log(planetsLineBreak);
    var planetsList = "";
    for (var i = 0; i < planetsArray.length; i++) {
        planetsList = planetsList + "<li>" + planetsArray[i] + "</li>";
    }
    planetsList = "<ul>" + planetsList + "</ul>";
    console.log(planetsList);
    console.log("It would be helpful so that an array that was input could be displayed on a webpage as a list");
})();
