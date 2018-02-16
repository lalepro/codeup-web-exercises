$(document).ready(function(){
   "use-strict";

    function updatePage() {

        var request = $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: "15f835fe548c0c4be88571d404daee42",
            q: "San Antonio",
            units: "imperial"
        });

        request.done(function (weather) {
            console.log(weather.list);
            buildHTML(weather);
        });

        request.fail(function (status) {
            console.log(status);
        })
    }
    updatePage();


    //    --_-_-_-_-_-_----_-__-_--_-

    function buildHTML(input) {
        var html = " ";
            for(var i = 3; i < 23; i+= 7) {
                html += "<div class='style'>";
                html += "<p>" + parseInt(input.list[i].main.temp_max) + "/" + parseInt(input.list[i].main.temp_min) + "</p>";
                html += "<p>Clouds: </p>";
                html += "<p>" + input.list[i].clouds.all + "</p>";
                html += "<p>Humidity: </p>";
                html += "<p>" + input.list[i].main.humidity + "</p>";
                html += "<p>Wind: </p>";
                html += "<p>" + input.list[i].wind.speed + "</p>";
                html += "<p>Pressure: </p>";
                html += "<p>" + input.list[i].main.pressure + "</p>";
                html += "</div>";
            }


        // html += "<hr>";
        $("#weatherStuff").html(html);
        console.log(html)
    }


    $("#sunButton").click(updatePage);
        updatePage()




});