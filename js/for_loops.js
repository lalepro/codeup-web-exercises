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

//
// LOOPS BONUSES
//
// BONUSES 1:
//
// Write a function to toggle all characters in a string: in a
// given string, toggle all characters to their opposite case.
// Special characters will not change.
//
//     Example input: “aBc12#”
// Example output: “AbC12#”


function toggle(string){
        var str = (" ");
        for(var i = 0; i < string.length; i++){
             var change = string[i];
            if(change == change.toUpperCase()) {
                str += change.toLowerCase();
            } else if (change.toLowerCase()){
                str += change.toUpperCase();
            } else {
                str += change;
            }
        }
            return str;
}

//-------_--_-_----_-_----_---------_--_OR

str = 'Hi, Stack Overflow.';
res = '';
for (var i = 0; i < str.length; ++i) {
    c = str[i];
    if (c == c.toUpperCase()) {
        res += c.toLowerCase();
    } else if (c == c.toLowerCase()) {
        res += c.toUpperCase();
    } else {
        res += c;
    }
}


// BONUS 2:
//
// Write a function that takes a given string appended
// with a number at the end. The program will check the length of
// the string to verify the string is equal to the number appended.
// If the number appended equals the string length, output “Yes”. if
// the number appended does not equal the string length, output “No”.
//
// Example Input: “geek5”
// Example Output: “Yes”
//
// Example Input: “codingchallenge25”
// Example Output: “No”



function insane(str){
    var n = str.length();
    var num = 0;
    var x = 1;
    var i = n-1;
    for (i=n-1; i>=0; i--) {
        if ('0' <= str[i] &&  str[i]  <= '9') {
            num = (str[i] - '0')*x + num;
            x = x * 10;
        }
        else break;
    }

    return num == i + 1;
}



//longest word returns length of string:

function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    for(var i = 0; i < strSplit.length; i++){
        if(strSplit[i].length > longestWord){
            longestWord = strSplit[i].length;
        }
    }
    return longestWord.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");



//longest word of a string, returns the word:

function LongestWord(sen) {
    sen=sen.replace(/[^a-zA-Z ]/ig,'')
    words = sen.split(" ")
    LongestWord = words[0]
    for (i = 0; i<words.length; i ++) {
        if (words[i].length > LongestWord.length) {
            LongestWord = words[i]
        }
    }
    return LongestWord
}


















