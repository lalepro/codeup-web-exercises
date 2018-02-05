"use-strict";

function sayHello(name) {
    return "Hello " + name + "! Welcome to the rest of you life!";
}

var helloMessage = sayHello("Laura");

console.log(helloMessage);

var myName = "Laura";

sayHello(myName);

// var random = Math.floor((Math.random() * 3) + 1);

var x = [1, 2, 3, 2, 4, 5];


function isTwo(x) {
    var duo = [];
    for (var i = 0; i < x.length; i++)
        if (x[i] === 2) {
            duo.push(x[i]);
        }
    return duo;
}

console.log(isTwo(x));

