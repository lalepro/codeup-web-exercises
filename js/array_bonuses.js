"use-strict";
//
// 1. Write a function called average(numbers) that takes in an array
// of numbers and returns the average
//
var numbers = [1, 234, 543, 13, 99];

function average(numbers) {
    var sum = 0; //initial value

    for(var i = 0; i <= numbers.length-1; i++){
        sum = sum + numbers[i];

    }
    sum /= numbers.length;
    return sum;
}
console.log(average(numbers));

//
//
//
//
//
// // 2. Write a function called sumAll(numbers) that takes in an array of
// numbers and returns the sum of adding all of them.
//
function sumAll(numbers) {
    var sum = 0;

    for(var i = 0; i <= numbers.length-1; i++){
        sum = sum + numbers[i];
        console.log(sum);
    }
}
console.log(sumAll(numbers));



// 3. Write a function called max(numbers) that takes in an array of
// numbers and returns the largest
//
var digits = [1, 234, 543, 13, 99];

function largest(digits) {
    return Math.max(...digits);
}

console.log(largest(digits));



// 4. Write a function called min(numbers) that takes in an array of
// numbers and returns the smallest
//
var arr = [14, 58, 20, 77, 2, 82, 42, 67, 42, 4]
var min = Math.min.apply(Math, arr)
console.log(min)



// 5. Write a function called reverseArray(array) that takes in an
// array and returns the elements in reverse order
//

var reverse = arr.reverse();

console.log(reverse);

// 6. Write a function called randomElement(array) that takes in an
// array and returns a random element

var array = [1, 234, 543, 13, 99];

function randomElement(array) {
   var num = array[Math.floor(Math.random()*array.length)];
   return num;
}
console.log(randomElement(array));


//**********************random will be used to access the array at
// a random index IE: myArr[randNum]





// 7. Write a function called upperCaseAll(array) that takes in an
// array of strings and returns an array of uppercased strings.
//

var names = ['Alex', 'Bonnie', 'Steve', 'Laura'];

function upperCaseAll(names) {
    var total = 0;
    for(var i = 0; i < names.length; i++){
        total = names[i].toUpperCase();
        console.log(total);

    }
}
console.log(upperCaseAll(names));








// 8. Write a function called getOdds(array) that returns an array of
// only the odd numbers from an array of numbers.
//

var numbers = [1, 234, 543, 6, 13, 99, 8];


function getOdds(numbers) {
    var oddArr = [];
    for(var i = 0; i <= numbers.length-1; i++)
    if (numbers[i] % 2 !== 0) {
         oddArr.push(numbers[i]);

    }
    return oddArr;
}
console.log(getOdds(numbers));






// 9. Write a function called getEvens(array) that returns only the
// even numbers from an array of numbers
//

var numbers = [1, 234, 543, 6, 13, 99, 8];


function getEvens(numbers) {
    var evenArr = [];
    for(var i = 0; i <= numbers.length-1; i++)
        if (numbers[i] % 2 === 0) {
            evenArr.push(numbers[i]);

        }
    return evenArr;
}
console.log(getEvens(numbers));




// 10. Write a function called multiplyAll(array) that takes in an array
// of numbers and returns the result of multiplying all the numbers

var numbers = [3, 234, 543, 13, 99];

function multiply(numbers) {
    var sum = 1;

    for(var i = 0; i <= numbers.length-1; i++){
        sum = sum * numbers[i];
        console.log(sum);
    }
}
console.log(multiply(numbers));


//
// adding our removing first element arrays= array.shift() && array.unshift()
//
// pop and push removes lasts element =pop && push=adds a new element to the end
//
//
// ================================= ARRAY MANIPULATION
// BONUS 1:
// Create a phone number parser that will convert a string of numbers into a
// human readable format. The output should depend on the number of digits
// (account for 7, 10, 11 digit numbers):
// Using multiple functions will be helpful.
//     input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323
//
// Extra Challenge: account for invalid characters
// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers
// BONUS 2:
// Create a student roster management app. Using the user dialogue functions
// (alert, confirm, prompt), create an application that will prompt the user
// to choose from a menu with the following actions:
//     1) Add a student name
// 2) Delete a student name
// 3) View all student names in alphabetical order
// 4) View all student names in reverse alphabetical order
// Store the student names in an array. Account for invalid user input.
//




