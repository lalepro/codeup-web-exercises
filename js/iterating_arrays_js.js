"use strict";




    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names = ['Alex', 'Bonnie', 'Steve', 'Laura'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log("There are " + names.length + " names in my array!");

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

console.log(names[0] + " is a name on my array!");
console.log(names[1] + " is a name on my array!");
console.log(names[2] + " is a name on my array!");
console.log(names[3] + " is a name on my array!");

/**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(var i = 0; i < names.length; i++) {
    console.log("The element at index " + i + " is" + " " + names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(element, index, array){
        console.log(element, index, array);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

var numbers = [1, 2, 3, 4, 5];
first(numbers);
second(numbers);
last(numbers);

function first(input){
    console.log(input[0]);
}
function second(input){
    console.log(input[1]);
}

function last(input){
    console.log(input.length -1);
}

//------------

Array.isArray([0])

