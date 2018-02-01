"use-strict";
//
// 1. Write a function called average(numbers) that takes in an array of numbers and returns the average
//
var numbers = [1, 234, 543, 13, 99];


function average(numbers) {
    var sum = 0;

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
// // 2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.
//
function sumAll(numbers) {
    var sum = 0;

    for(var i = 0; i <= numbers.length-1; i++){
        sum = sum + numbers[i];
        console.log(sum);
    }
}
console.log(sumAll(numbers));



// 3. Write a function called max(numbers) that takes in an array of numbers and returns the largest
//
var digits = [1, 234, 543, 13, 99];

function largest(digits) {
    return Math.max(...digits);
}

console.log(largest(digits));



// 4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest
//
var arr = [14, 58, 20, 77, 2, 82, 42, 67, 42, 4]
var min = Math.min.apply(Math, arr)
console.log(min)



// 5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order
//

var reverse = arr.reverse();

console.log(reverse);

// 6. Write a function called randomElement(array) that takes in an array and returns a random element

var array = [1, 234, 543, 13, 99];

function randomElement(array) {
   var num = array[Math.floor(Math.random()*array.length)];
   return num;
}
console.log(randomElement(array));


//**********************random will be used to access the array at a random index IE: myArr[randNum]





// 7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.
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








// 8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.
//

var numbers = [1, 234, 543, 13, 99, 8];


function getOdds(numbers) {
    var sum = 0;

    for(var i = 0; i <= numbers.length-1; i++) {
        sum = numbers[i] % 2 === 1;
        console.log(sum);
    }

}
console.log(getOdds(numbers));






// 9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers
//



// 10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers

var numbers = [3, 234, 543, 13, 99];

function multiply(numbers) {
    var sum = 1;

    for(var i = 0; i <= numbers.length-1; i++){
        sum = sum * numbers[i];
        console.log(sum);
    }
}
console.log(multiply(numbers));



//adding our removing first element arrays= array.shift() && array.unshift()

//pop and push removes lasts element =pop && push=adds a new element to the end





