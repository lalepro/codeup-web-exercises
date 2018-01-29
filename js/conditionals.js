"use strict";


window.confirm("Confirm you'd like to enter a number")
    if (confirm) {
    var response = prompt("Please input a number:");
    evenOdd(response); positiveNegative(response); hundreth(response);
    }
    else {
    console.log("Bye");
    }

function evenOdd(response) {
    var reminder = response % 2;
    if (reminder == 0) {
        alert("Your number is even");
    } else if (reminder == Math.round(reminder)) {
        alert("Your number is odd");
    } else {
        alert("Bye!");
    }
}


function positiveNegative(response) {
    if (response >= 0) {
        alert("Your number is positive!");
    } else {
        alert("Your number is negative!");
    }
}

function hundreth(response) {
    var hundredMore = +response + +100;
    alert("Your input plus 100 equals: " + hundredMore);

}



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

/* ########################################################################## */



window.confirm("Do you have a favorite color?")
    if (confirm) {
        var colors = prompt("What is your favorite color?");


        function analyzeColor(colors) {
            var message;

            if (colors === 'red') {
                message = "Red is the color of a beating heart";
            } else if (colors === 'blue') {
                message = "Blue is the color of the sky";
            } else if (colors === 'orange') {
                message = "Orange is the color of fruits in Florida";
            } else if (colors === 'yellow') {
                message = "Yellow is a terrible color";
            } else if (colors === 'green') {
                message = "Green is the color of grass";
            } else if (colors === 'indigo') {
                message = "Old Lesbos love indigo girls";
            } else if (colors === 'violet') {
                message = "Violet is the color of some flowers";
            } else {
                message = "No colors for you."
            }
            return message;
        }
    }

    alert(analyzeColor(randomColor));


/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */


function analyzeColor(colors) {

    switch(colors) {
        case 'red':
        return "Red is the color of a beating heart";
        break;

        case 'blue':
        return "Blue is the color of the sky";
        break;

        case 'orange':
        return "Orange is the color of fruits in Florida";
        break;

        case 'yellow':
        return "Yellow is a terrible color";
        break;

        case 'green':
        return "Green is the color of grass";
        break;

        case 'indigo':
        return 'Old school lesbos love indigo girls';
        break;

        case 'violet':
        return 'Violet is the color of some flowers';
    }
}



console.log(analyzeColor(randomColor));


/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

// Generate a random number between 0 and 6


var luckyNumber = Math.floor(Math.random() * 6);



window.confirm("Press okay to get your random lucky number");
        alert("Your lucky number is " + luckyNumber);




calculateTotal(luckyNumber);


function calculateTotal(number) {
    var bill = prompt("What is your bill total?");

    if (number === 1) {
        var due = bill - bill * 0.10;
        alert("You owe" + " " + "$" + due);
    }

    else if (number === 2) {
        var due = bill - bill * 0.25;
        alert("You owe" + " " + "$" + due);
    }

    else if (number === 3) {
        var due = bill - bill * 0.35;
        alert("You owe" + " " + "$" + due);
    }

    else if (number === 4) {
        var due = bill - bill * 0.50;
        alert("You owe" + " " + "$" + due);
    }
    else if (number === 5) {
        var due = bill - bill;
        alert("You owe nothing!! Everything is free!!");
    } else {
        var due = bill;
        alert("You have NO LUCK!! Sorry, you owe" + " " + "$" + due);

    }

}



/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */

//*********************************************************************************
//
//         = CONDITIONALS BONUSES
//         Bonus 1.
//         Write a function (or multiple functions) that will return
//         a boolean depending on if the string value passed to it
//         as an argument is the name of a day of the week that starts with a T.
//             Otherwise, it should return false.
//             Example: dayOfTheWeekStartsWithT("Monday")     => returns false
//         Example: dayOfTheWeekStartsWithT("Tuesday")     => returns true
//         Example: dayOfTheWeekStartsWithT("Tommy")     => returns false
//
//         Bonus 2.
//         Write a function, isValidPassword, that takes in a string argument and returns true or false
//         depending on whether or not all the following conditions are true:
//         1) Must be 6 characters long (only for the sake of this exercise, NOT a best practice)
// 2) Contains at least one letter and one number
// 3) Contains at least one upper and one lower case letter
// 4) Only comprised of letters and numbers
// 5) EXTRA BONUS: is not the same forwards and backwards

var string = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function dayOfTheWeekStartsWithT(string) {

    switch (string) {
                case
                string[0] === "T" + string.substring(1):
                    return true;
                    break;

                case
                string[0] !== "T" + string.substring(1) :
                    return false;
                    break;

        case string: "Tuesday" || "Thursday";
            return true;
            break;

        case string: ;
            return false;

            }
        }
