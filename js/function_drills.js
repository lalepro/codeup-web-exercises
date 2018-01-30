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


