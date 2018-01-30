'use strict';



function showMultiplicationTable(number){

    for(var y = 1; y <=10; ++y) {

        var outcome = number * y;
        console.log(number + "x" + y + "=" + outcome);
    }
}

showMultiplicationTable(7);



//2***********




var number;

    for(var x = 1; x <=10; x++) {
        number = Math.floor(Math.random() * 180) + 20;

        if(number % 2 === 0) {
            console.log(number + " is even");

        } else {
                console.log(number + " is odd");
        }
    }

//    3_________________________________________

for(var i = 1; i <=9; i++){
        i = i.toString();
        console.log(i.repeat(i));
}

//++++++++++++++++++++++++++++++++++++++++++++++++++
for(var i = 1; i <= 9; i++) {

    var output = '';
    for (var j = 1; j <= i; j++) {
        output += i;
    } console.log(output)
}


//+++++++++++++++++++++++++++++++++++++++++++++++++++++5

for(var i = 100; i >= 5; i -=5) {
        console.log(i)
}


//_____________________________________________________________