'use strict';

1

var i = 2;
while (i<= 65536) {
    console.log(i);
    i *= 2;
}


//
// Ice Cream cones

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    console.log(allCones + " cones to sell! ");

    var conesSold = Math.floor(Math.random() * 5) + 1;

    if(conesSold < allCones){
        console.log("I sold" + " " + conesSold);
        allCones -= conesSold;
    }

    if(conesSold > allCones){
        console.log("I can't sell you " + conesSold + " cones. Because I only have " + allCones + " cones left");
        allCones -= conesSold;
    }

    if(conesSold === allCones){
        console.log("I sold all the cones");
        break;
    }
}

while(allCones > conesSold);


