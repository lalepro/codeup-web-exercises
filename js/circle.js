
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
            var result = this.getArea();
            // TODO: complete this method.
            if (doRounding) {
                result = Math.round(this.getArea());
            } else {
                result = this.getArea();
            }

            result = (doRounding) ? Math.round(this.getArea()) : this.getArea();
            var outputMessage = "Area of a circle with radius: ";
            outputMessage += this.radius + ", is: ";
            outputMessage += result;

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