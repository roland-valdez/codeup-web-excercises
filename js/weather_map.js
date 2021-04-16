"use strict";
$(document).ready(function () {

// ************* ARRAY FOR BACKGROUND ******************
    var pictures = {
        snow: "url('img/snow.jpg')",
        rain: "url('img/rain.jpg')",
        fog: "url('img/fog.jpg')",
        clear: "url('img/clear.jpg')",
        cloudy: "url('img/cloudy.jpg')"
    };

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
    var PopUp = new mapboxgl.Popup()
// .setText($("#weatherLocation").val());
    marker.setPopup(PopUp);
    var geoCoord = {lat: coord[0], lng: coord[1]};
    getWeather();

    // overlay();
    marker.on('dragend', onDragEnd);

// ************* Map overlay ******************
//     function overlay (){ $(".mapOverlay").css("display", "block").html("Display Adddress, current temp, wind  and description")};
// ************* GET CITY FROM LAT LONG ******************
    function findCity() {
        reverseGeocode(geoCoord, mapboxToken).then(function (results) {
            city = results.features[3].place_name;
            $(".city").html("<h6>" + city + "</h6>")
        })
    }

// // ************* GET LOCATION FROM SEARCH ******************
// // ************* converts address to lat long ******************

    $("#weatherBtn").click(function (e) {
        e.preventDefault();
        var map = new mapboxgl.Map(mapOptions);
        geocode($("#weatherLocation").val(), mapboxToken).then(function (results) {
            // console.log(results);
            mapOptions.center = results;
            coord = [results[1], results[0]];
            geoCoord = {lat: coord[0], lng: coord[1]};
            map.flyTo({center: results, zoom: 9.7, duration: 5000})
            var marker = new mapboxgl.Marker({color: "red", draggable: true})
                .setLngLat(results)
                .addTo(map);
            var PopUp = new mapboxgl.Popup()
// .setText($("#weatherLocation").val());
            marker.setPopup(PopUp);
            getWeather();
            marker.on('dragend', onDragEnd);

        });
    });

// ************* GET LOCATION FROM MARKER DRAG ******************
    function onDragEnd() {
        coord = marker.getLngLat();
        // overlay();
        coord = [coord.lat, coord.lng];
        geoCoord = marker.getLngLat();
        getWeather();
        marker.on('dragend', onDragEnd);
    }

// ************* GET WEATHER ******************
// ************* needs coord to work ******************

    function getWeather() {
        $.get("https://api.openweathermap.org/data/2.5/onecall", {
            lon: coord[1],
            lat: coord[0],
            exclude: "hourly,minutely,alerts",
            appid: open_weatherToken,
            units: "imperial"
        }).done(function (results) {
            console.log(results);
            findCity();
            displayWeather(results);
        });
    }

// ************* DISPLAY WEATHER ******************

    function displayWeather(results) {

//**************** CURRENT WEATHER **********************
        var dayofWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        $(".current").each(function () {
            var utcSeconds = results.current.dt;
            var day = new Date(utcSeconds * 1000); // The 0 there is the key, which sets the date to the epoch
            day.toDateString();
            day.setUTCSeconds(utcSeconds);

            day.toDateString();
            $(this).html("<h6>" + dayofWeek[day.getDay()] + "</h6><h6>" + month[day.getMonth()] + " " + day.getDate() + "</h6>");
        });
        $(".current").html("<h6>Current temp: " + Math.round(results.current.temp) + "&#8457;</h6>");

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
            // console.log(weatherIcon);
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
        $(".low").each(function (i) {
            $(this).html("<h6>Min temp: " + Math.round(results.daily[i].temp.min) + "&#8457;</h6>");
        })
        $(".high").each(function (i) {
            $(this).html("<h6>Max temp: " + Math.round(results.daily[i].temp.max) + "&#8457;</h6>");
        });
    }
    marker.on('dragend', onDragEnd);
});
