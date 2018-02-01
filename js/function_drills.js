// Each time you define a new function, be sure to run it with some test inputs.
//
//     Make a function named sayHello(name) that returns "Hi " + name.
//
function sayHello(name){
            return "Hello" + " " + name;
        }

        var title = sayHello("Laura");
    console.log(title);


//     Write a function named capitalize(string) that takes a string of any capitalization and uppercases the first character and lowercases the rest of the characters of a string.


function capitalize(string){
    return string.charAt(0).toUpperCase() + string.substring(1);
}




//     Write a function named upperCase(string)
function upperCase(string) {
    return string.toUpperCase():
}


// Make a function named identity(input) that returns the input exactly as provided.

function identity(input){
    return input;
}


//     Make a function named isOdd(number)

function isOdd(number){
    return number %2;
}


// Make a function named isEven(number)
function  isEven(number) {
    return number%2 == 0;
}



// Make a function named isPositive(number)

function isPositive(number){
    return number >= 0;
}

// Make a function named isNegative(number)

function isNegative(number) {
    return number < 0;
}


// Make a function named isBoolean(input)

function isBoolean(input){
    return input.toString();
}

// Make a function named isFalse(boolean)
funtion isFalse(boolean){
    return = 0;
}

// Make a function named isTrue(boolean)
function isTrue(boolean){
    return isNaN(boolean);
}

// Make a function named isTruthy(input)
function isTruthy(input) {
    return input == true;
}

// Make a function named isFalsy(input)
function isFalsy(input){
    return input == false;
}

// Make a function named isVowel(letter)
function isVowel(letter) {
    if (letter == "a" || letter == "i" || letter == "e" || letter == "o" || letter == "u")
    {
        return true;
    }
    return false
}


// Make a function named hasVowels(string) that uses isVowel to check if a string has any vowels

function hasVowels(string) { 
    return string.indexOf(isVowel();
}

// Make a function named isConsonant(letter)
function isConsonant(letter) {
    if (letter == "a" || "i" || "e" || "o" || "u") {
        return false;
    }
    return true;
}


// M return false

var M = "false";                                                                                                               ake a function named hasConsonants(string)

// Make a function named isCapital(letter)
function isCapital(letter){
    return letter.charAt(0) !== letter.charAt(0).toUpperCase();

}

// Make a function named hasCapitalLetters(string) that returns if a string has any capitals.
function hasCapital


//     Make a function named isLowerCase(letter)
function isLowerCase(letter){
   return letter.charAt(0) !== letter.charAt.UpperCase();
}

// Make a function named hasLowerCase(string) that returns if a string has any lower cased
   function hasLowerCase(string){
          return (/[a-z]/.test(string));
   }



// Make a function named isSpace(letter) that returns if a character is a space character

function isSpace(letter) {
     letter.trim() === '' ? console.log("true") : console.log("false");

}

//OR

function isSpace(letter) {
    return letter.trim() === '';
}

//OR

function isSpace(letter) {
    if (letter.trim() === '') {
        return true;
    } else {                 
        return false;
    }
}

// Make a function named hasSpaces(string) that returns if a string has any space characters
function hasSpace(input) {
    return input.indexOf(' ') >= 0;
}


// Make a function named isZero(number)

// Make a function named increment(number) that returns a number plus one

// Make a function named decrement(number) that returns a number minus one

// Make a function named isFive(input)

// Make a function named addFive(input) that adds five to some input.

//     Make a function named isMultipleOfFive(input)

// Make a function named isThree(input)
function isThree(input){
       return input === 3;
}

// Make a function named isMultipleOfThree(input)

function isMultipleOfThree(input){
     return input % 3 === 0;
    }

// Make a function named isMultipleOfThreeAndFive(input)

function isMultipleOfThreeAndFive(input){
    return input % 3 === 0 && input % 5 === 0;
}

// Write a function named lowerCase(string)

function lowerCase(string){
     return string.toLowerCase();
}


// ??Write a function named capitalizeEachWord(string) uses capitalize to return a string where each new word (separated by a space) is capitalized.

function capitalizeEachWord(string) {
    return string.toUpperCase() && string.split('').join(' ');
  }


//     Write a function named add(a, b) that returns the sum of a and b

function add(a, b) {
    var x = a + b;
    return x;
}


// Write a function named subtract(a, b) that returns a minus b

function subtract(a, b){
    var x = a - b;
    return x;
}

// Write a function named multiply(a, b) that returns the product of a times b

function multiply(a, b){
    return a * b;
}

// Write a function named divide(a, b) that returns a divided by b
  function divide(a, b){
    return a / b;
  }
// Write a function named remainder(a, b) that returns the remainder after dividing a by b
 function remainder(a, b){
    return a % b;
 }
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
    function isBlank(input){
    if (input = input.indexOf("")){
        console.log("Character has space");
        } else if (input = line\;) {
        console.log("Newline Character");
        } else ()
    }
    
//     Make a function named isNumeric(input) returns true/false if the input is a number or numeric string

// Make a function named trim(string) that removes empty spaces before and after the input.



function isBoolean(input) {
    return typeof input == "boolean";
}



function isNumeric(input) {
    return !isNaN(input);
}

//answer below need to study below option and understand parseFloat beter

function isNumeric(n) {
    return !isNaN(parseFloat(n) && isFinite(n));
}

//got string really wrong

function isString(input) {
    if (typeof input === 'boolean') {
        return 'true';
    }
}
//string done right below: needed to write string not boolean

function isString(input) {
    return typeof input === "string";
}

//issues with ARRAY, PLEASE STUDY

function isArray(input) {
    if(toString.call(input) === "[object Array]"){
        return true;
    }
}
//correct array below: Array.isArray() is a function unless Array is defined

function isArray(input) {
    return Array.isArray(input);
}



function isNegative(input) {
    return input < 0;
}

//alternative isNegative below and either way works but this
// shows you how to add a function to a function.

function isNegative(input) {
    if(isNumeric(input)) {
        return input < 0;
    }
    return false;
}


function isPositive(input) {
    if(input > 0) {
        return;
    } else if(input = isNaN) {
        return false;
    }
}

// study isPostive function. below. Study PARSE FLOAT

function isPositive(input) {
    return parseFloat(input) > 0;
}


function increment(input) {
    if(typeof input === 'boolean' && isNaN) {
        return false;
    } else if(input !== typeof " " && 'number') {
        return input + 1;
    }
}

//increment teacher solution below
function increment(input) {
    if(isNumeric(input)) {
        return ++input;
    } else {
        return false;
    }
}
// ternary alternative
function increment(input) {
    return (isNumeric(input)) ? ++input : false;
}



function decrement(input) {
    if(input === typeof " ") {
        return 'false';
    } else {
        return input - 1;
    }
}

//decrement alternative

function decrement(input) {
    return (isNumeric(input)) ? --input : false;
}

function square(input) {
    if(input !== typeof " " && 'number') {
        return input * input;
    } else if(typeof input === 'boolean' && isNaN) {
        return "false";
    }
}

//techer below

function square(input) {
    return (isNumberic(input)) ? input * input : false;
}

//*********************************


function upperCase(input){
    if(typeof input === typeof " ") {
        return input.toUpperCase();
    } else {
        return "false";
    }
}

//teacher noteCard study parseInt!!!!

function upperCase(input){
    if(isString(input) && !isNumeric(input)){
        return input.toUpperCase();
    }
    return false;
}



function isPalindrome(myString) {
    if(typeof myString === typeof " ") {
        var prepString = myString.replace(/[^A-Z0-9]/ig, "").toLowerCase();
        var output = prepString.split('').reverse().join('');
        return true;
    } else {
        return false;
    }
}

// Palindrome teacher on Slack

function getHighestNumber(x, y , z){
    var points = [x, y, z];

    if(points === 'number'){
        var order = points.sort[x, y, z];
        return order[0];
    }
}



// Long go to slack for complete answer to getHighestNumber

function getHighestNumber(arg1, arg2, arg3) {
    // return Math.max(arg1, arg2, arg3);

    if(isNumeric(arg1) && isNumeric(arg2) && isNumeric(arg3)) {
        if(arg1 > arg2 && arg 1 > arg2) {
            return arg1;
        } if(arg2 > arg3 && arg2 > arg1) {
            return arg2;
        } if (arg3 > arg2 && arg3 > arg1){
            return arg3;
        }
    }
}



function containsVowel(letter) {
    if (letter == "a" || letter == "i" || letter == "e" || letter == "o" || letter == "u")
    {
        return true;
    }
    return false
}


// _________TEACHER CONTAINSVOWEL

function containsVowel(input){
    if(typeof  input !== "string" || isNumeric(input)){
        return false;
    } else {
        return input.includes("a") || input.includes("e") || input.includes("i") || input.includes("o") || input.includes("u");
    }
}



function add(a, b) {
    var x = a + b;
    return x;
}

//Teacher below


function add(a, b) {
    if (isNumeric(a) && isNumeric(b)) {
        return parseFloat(a) + parseFloat(b);
    } else{
        return false;
    }
}


function multiply(x, y) {
    if (isNaN(x || y)) {
        return 'false';
    }
}

//TEACHER BELOW parseFloat takes a string number and makes it a number, INT does something to decimals

function add(a, b) {
    if (isNumeric(a) && isNumeric(b)) {
        return parseFloat(a) * parseFloat(b);
    } else{
        return false;
    }
}


//question 16 didint do. below is teachers

function sumOfSquares(a, b) {
    if (isNumeric(a) && isNumeric(b)) {
        return square(a) + square(b);
    } else {
        return false;
    }
}









/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
//****************************************************************



/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

//
function sayHello(name){
    return "Hello" + " " + name;

}
var helloMessage = sayHello("Laura")
console.log(helloMessage);

var myName = "Laura"
console.log(sayHello(myName));




Don't modify the following line, it generates a random number between 1 and 3
and stores it in a variable named random

var random = Math.floor((Math.random() * 3) + 1);

function isTwo(random){
    return random == 2;
}

console.log(random + " " + isTwo(random));



/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */


function calculateTip(a, b){
    var bill = a;
    var tip = a * b;
    return tip;
}



function calculateTip(bill, tip) {
    return "$" + (bill * tip/100);
}

var bill = prompt("What is the bill total?");
var tip = prompt("What is the tip percent you'd like to leave?");


console.log(alert("Please Leave " + calculateTip(bill, tip)));



/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.37
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


function applyDiscount(originalPrice, discountPercent){
    return originalPrice - originalPrice * discountPercent;
}



var originalPrice = prompt("What is the bill total?");
var discountPercent = prompt("What is the percentage of sale?");


console.log(alert("Please Pay " + "$" + applyDiscount(originalPrice, discountPercent)));
//

/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */







