"use strict";
$(document).ready(function () {

// ************* DISPLAY MAP ON LOAD - Default to San Antonio ******************
    var coord = [19.4241, -88.4936]; // lat[0] long[1] standard format
    // var coord = [29.4241, -98.4936]; // lat[0] long[1] standard format

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

    // ************* GET GEOLOCATION ******************
    $(".geolocation").click(function () {
        console.log("inside geo")
    geoLocation();

    });
     function geoLocation(){
         var options = {
             enableHighAccuracy: true,
             timeout: 5000,
             maximumAge: 0
         };

         function success(pos) {
             var crd = pos.coords;

             console.log('Your current position is:');
             console.log(`Latitude : ${crd.latitude}`);
             console.log(`Longitude: ${crd.longitude}`);
             console.log(`More or less ${crd.accuracy} meters.`);
             coord = [crd.latitude,crd.longitude];
             map = new mapboxgl.Map(mapOptions);
             var lngLat = [coord[1], coord[0]];
             map.flyTo({center: lngLat, zoom: 9.7, duration: 5000})
             var marker = new mapboxgl.Marker({color: "red", draggable: true})
                 .setLngLat(lngLat)
                 .addTo(map);
             marker.on('dragend', onDragEnd);
             getWeather(coord);
         }

         function error(err) {
             console.warn(`ERROR(${err.code}): ${err.message}`);
         }

         navigator.geolocation.getCurrentPosition(success, error, options);

     }

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
        // map = new mapboxgl.Map(mapOptions);
        geocode($("#weatherLocation").val(), mapboxToken).then(function (results) {
            mapOptions.center = results;
            coord = [results[1], results[0]];// in open weather format for getWeather()
            marker.remove();
            map.flyTo({center: results, zoom: 9.7, duration: 5000});
            // map = new mapboxgl.Map(mapOptions);
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
        console.log("on drag", coord);

        // map = new mapboxgl.Map(mapOptions);
        var lngLat = coord;
        map.flyTo({center: lngLat, zoom: 9.7, duration: 1000})
        // var marker = new mapboxgl.Marker({color: "red", draggable: true})
        //     .setLngLat(lngLat)
        //     .addTo(map);

        // map.flyTo({center: coord, zoom: 9.7, duration: 1000});
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