
(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {

            var area = Math.PI * Math.pow(this.radius, 2);

            // TODO: complete this method


            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var finalArea = 0;
            if (doRounding) {
                finalArea = Math.round(this.getArea());
            } else {
                finalArea = this.getArea();
            }

            finalArea = (doRounding) ? Math.round(this.getArea()) : this.getArea();
            var outputMessage = "Area of a circle with radius: ";
            outputMessage += this.radius + ", is: ";
            outputMessage += finalArea;

            console.log(outputMessage);
        }
    };



    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();