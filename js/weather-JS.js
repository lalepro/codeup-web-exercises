$(document).ready(function(){
   "use-strict";



    var mapBtn = document.getElementById("searchBtn");

    var mapDisplay = document.getElementById("map-canvas");

    var mapOptions = {

        zoom: 8,

        center: {
            lat:  -33.856159,
            lng: 151.215256
        }
    };

    var form = document.getElementById("fill");


    var map = new google.maps.Map(mapDisplay, mapOptions);

    var zoomButtons = document.getElementsByClassName("zoom");


    function updatePage(userInput) {
        var input = document.getElementById('fill').value;
        console.log(input);
        var latlngStr = input.split(',', 2);
        var userInput = {lat: parseFloat(latlngStr[0]).toPrecision(10), lng: parseFloat(latlngStr[1]).toPrecision(10)};

        var lat = userInput.lat;
        var lng = userInput.lng;
        console.log(userInput);
        // destructuring
        // var {lat, lng} = userInput;

        var request = $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "15f835fe548c0c4be88571d404daee42",
            lat: lat,
            lon: lng,
            units: "imperial"
        });

        request.done(function (weather) {
            console.log(weather);
            buildHTML(weather);
        });

        request.fail(function (status) {
            console.log(status);
        })
    }
    // updatePage();


    //    --_-_-_-_-_-_----_-__-_--_-

    function buildHTML(input) {
        var html = " ";
            for(var i = 6; i < 23; i+= 8) {
                html += "<div class='style'>";
                html += "<p id='date'>" + input.list[i].dt_txt + "</p>";
                html += "<img src='http://openweathermap.org/img/w/" + input.list[i].weather[0].icon + ".png'</img>";
                html += "<p>" + "Current Temp: " + parseInt(input.list[i].main.temp) + "</p>";
                html += "<p>" +   input.list[i].weather[0].main +  ": " + input.list[i].weather[0].description + "</p>";
                html += "<p>" + "High/Low: " + parseInt(input.list[i].main.temp_max) + "/" + parseInt(input.list[i].main.temp_min) + "</p>";
                html += "<p class='clouds'>" + "Clouds: " + input.list[i].clouds.all + "</p>";
                html += "<p>" + "Humidity: " + input.list[i].main.humidity + "</p>";
                html += "<p>" + "Wind: " + input.list[i].wind.speed + "</p>";
                html += "<p>" + "Pressure: " +  input.list[i].main.pressure + "</p>";
                html += "</div>";
            }



        $("#cityName").html(input.city.name);
        $("#weatherStuff").html(html);
        console.log(html)
    }

    //
    // $(mapBtn).click(updatePage);
    //     updatePage();


//    ---------_----_-_-_--______--______-------____-------_GOOGLE MAP FUNCTIONS-_-_-_-_-_--_-_-_--_





    //_________________-------------________________-------------_____________________



    function geoCodeIt(latlng) {
        var geocoder = new google.maps.Geocoder();
        console.log('latlng', latlng);

        geocoder.geocode({'location': latlng}, function(results, status){
            if (status = "OK") {
                //__---__--_--_--_--------_Marker-starts

                map.setCenter(results[0].geometry.location);

                var icon = {
                    url: ("http://www.clker.com/cliparts/o/o/b/g/O/i/map-pin-hi.png"),
                    scaledSize: new google.maps.Size(45, 45),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(0, 32)
                };


                var marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    map: map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    icon: icon

                });
            }
        });

    }




    //_------____--__-_--_--_-_-_-__---_-_--_-__-__-__The Search Map Tool
    //

    function userMap(){
        var input = document.getElementById('fill').value;
        console.log(input);
        var latlngStr = input.split(',', 2);
        var userInput = {lat: parseFloat(latlngStr[0]).toPrecision(10), lng: parseFloat(latlngStr[1]).toPrecision(10)};
        event.preventDefault();
        zoom: 15;
        geoCodeIt(userInput);
        updatePage(userInput);
    }
    mapBtn.addEventListener("click", userMap);

    //________-----_____-----______-----______-----______allows you to press Enter

    //
    //
    // form.addEventListener("keypress", function() {
    //     var input = document.getElementById('latlng').value;
    //     var latlngStr = input.split(',', 2);
    //     var userInput = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
    //     console.log(typeof userInput1);
    //     if(event.keyCode === 13){
    //         console.log("pressed enter");
    //         geoCodeIt(userInput);
    //
    //         var marker = new google.maps.Marker({
    //             position: results[0].geometry.location,
    //             map: map,
    //             draggable: true,
    //             animation: google.maps.Animation.DROP,
    //             icon: icon
    //
    //         });
    //
    //
    //         marker.addListener("click", function(){
    //             infowindow.open(geocoder, marker);
    //         });
    //
    //
    //     }
    // });





});