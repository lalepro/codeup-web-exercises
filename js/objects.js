(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
var human = {};
human.firstName = "Laura";
human.lastName = "Prochaska";
console.log(human.firstName + human.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
human.sayHello = function () {
    return "Hello! " + this.firstName + " " + this.lastName + " Welcome!";
}
console.log(human.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(element){
        var sum = 0;
        var discount = element.amount * 0.12;
            if (element.amount < 200){
                console.log(element.name + " owes $" + element.amount + " because he did not purchase enough.");
            } else if (element.amount > 200) {
                sum = sum + element.amount - discount;
                console.log(element.name + " owes this $" + sum + " " + element.name + " saved $" + discount);
            }


    });





    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */


    var books = [
        {
            title: "Pride & Prejudice",
            author: {
                firstName: "Seth",
                lastName: "Grahame-Smith"
            }
        },
        {
            title: "To kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee",
            }
        },
        {
            title: "Are you there, Vodka? It's Me, Chelsea",
            author: {
                firstName: "Chelsea",
                lastName: "Handler",
            }
        },
        {
            title: "Neverwhere",
            author: {
                firstName: "Neil",
                lastName: "Gaiman",
            }
        },
        {
            title: "The grapes of Wrath",
            author: {
                firstName: "John",
                lastName: "Steinbeck",
            }
        }
];




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    console.log("Here is all the info about the books");

    for (var i = 0; i < books.length; i++) {
        var book = books[i];
        var title = book.title;
        var authorsName = book.author.firstName + " " + book.author.lastName;
        var bookNumber = i + 1;

        console.log("The book number is : " + bookNumber);
        console.log('The book is ' + title);
        console.log('The author of this book is ' + authorsName);
        console.log("------------------");

    }

        var output = "";
    books.forEach(function(book, index){
        output += 'book # ' + (index + 1) + "\n";
        output += 'Title: ' + book.title + "\n";
        output += 'Author: ' + book.author.firstName + ' ' + book.author.lastName + "\n";
        output += "-----\n";

    });
        console.log(output);

    //    _______________________________________

    var book = books[i];
    var title = book.title;
    var authorsName = book.author.firstName + " " + book.author.lastName;
    var bookNumber = i + 1;
    var output = "";

    books.forEach(function(){
        output += "Book " + bookNumber + '\n';
        output += "Title " + title + '\n';
        output += 'Author ' + authorsName + '\n';
        output += '------------\n';

    })

    document.write(output);




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    var books = [];

    function createBook(title, author) {
        return {
            title: title,
            author: author
        }
    }
    var book = createBook("To Kill A Mockingbird", "Harper Lee");
    console.log(book);

    //------------------------------------JS ASSESSMENT TWO



    // Write a function named isTen that accepts a number and returns a
    // boolean that indicates whether or not that number is equal to 10.


    function isTen(input) {
        if (input === 10) {
            return true;
        } else {
            return false;
        }

    }


    // Write a function named double that accepts a number
    // and returns the number doubled.


        function double (x) {
        var num = x * 2;
        return num;
    }



    // Write a function named remove9s that accepts an array of numbers
    // and returns an array with all the same numbers except for 9.
    // learned you can put a for each loop into a function


    function remove9s(number){
        var outputArray = [];
        numbers.forEach(function (number) {
            if (number != 9) {
                outputArray.push(number);
            }
        });
            return outputArray;
        }

        //------------OR-------------------------

        function remove9s(numbers){
        return numbers.filter(function(number) {
            return number !=9;
        });

        }


    // Write a function named capitalizeName that accepts a
    // string that is a first and last name separated by a
    // space, and returns a string that that has the first
    // and last names capitalized.

        function capitalizeName(names) {
        var str = names.toLowerCase().split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ');
    }

    capitalizeName("laura prochaska");

    //or

    function capitalizeName() {
        var nameArray = nameString.split(" ");
        var firstName = nameArray[0];
        var lastName = myArray[1];
        if (firstName[0] != firstName[0].toUpperCase()){
            var firstchar = firstName[0].toUpperCase();
            var rest = firstName.substring(1);
        }
    }


    // Write a function named capitalizeAllNames
    // that accepts an array of strings where each
    // string is in the format described in the
    // previous problem, and returns an array of
    // strings where each string contains a capitalized named.

        var names = ['alex banner', 'bonnie charles', 'steve lovely', 'laura prochaska'];

    function capitalizeAllNames(arrayOfnames) {
        for (var i=0; i < names.length; i++) {
            arrayOfNames[i] = capitalizeName(arrayOfNames[i]);
        }
        return arrayOfNames;
    }

    //or

    function capitalizedAllNames(arrayOfNames){
        var output = [];
        arrayOfNames.forEach(function(element){
            output.push(capitalizeName(element));
        });
    }

    //or


    function capitalizeAllNames(arrayOfNames){
        return arrayOfNames.map(capitalizeName);
    }



    // Write a function named countVowels that accepts a
    // string and returns the number of vowels in that
    // string. (Don't worry about, or count "y" as a vowel)


    function countVowels(input) {
        string = string.toLowerCase();
        var vowelsCount = 0;
        var string = input.toString();

        for (var i = 0; i <= string.length - 1; i++) {
            if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
                vowelsCount += 1;
            }
        }
        return vowelsCount;
    }

    //or a better way!!!

function countVowel(string) {
        var vowels = "aAeEiIoOuU";
        var vcount = 0;

    for (var i = 0; i <= string.length - 1; i++) {
        if(vowels.indexOf(string[i] !== -1) {
            vcount =+ 1;
        }
    }
    return vcount;
}


    // Write a function named averageSales that accepts
    // an array of objects where each object represents
    // a person, and has a sales property. The function
    // should return the average of every object's sales property.


    var array = [
        {
            name: 'Jim Halpert',
            sales: 100
        },
        {
            name: 'Dwight Schrute',
            sales: 50
        },
        {
            name: 'Andy Bernard',
            sales: 150
        }
    ];


    function averageSales(array) {
        var sum = 0;
        for(var i = 0; i < array.length; i++){
            sum = sum + array[i].sales;
        }
        sum = sum / array.length;
        return sum;
    }

    //or

    function averageSales(array) {
        var sum = 0;
        array.forEach(function (salesPerson) {
            sum += salesPerson.sales;
        });
        return total / array.length;
    }

    //-------or

    function averageSales(arr) {
        return arr.reduce(function(arr, o) {
            return arr + o.sales
        }, 0) / arr.length;
    }


    // Write a function named analyzeWord. It
    // should take in a string and return an
    // object with information about the input
    // word. The object returned should have
    // the following properties:




    function analyzeWord(word) {
        return {
            word: word,
            numberOfLetters: word.length,
            numberOfVowels: countVowels()
        };
    }

    // Write a function named analyzeWord. It should take
    // in a string and return an object with information
    // about the input word. The object returned should
    // have the following properties:

    // analyzeAllWords(['html', 'css', 'javascript'])

  var array =  [
        {
            word: 'html',
            numberOfLetters: 4,
            numberOfVowels: 0
        },
        {
            word: 'css',
            numberOfLetters: 3,
            numberOfVowels: 0
        },
        {
            word: 'javascript',
            numberOfLetters: 10,
            numberOfVowels: 3
        }
    ]


    function analyzeAllWords(array) {
     for(var i = 0; i < array.length; i++){
     array[i] = analyzeWord(array[i]);
     }
     return array;

    }

    //or


    // var arrayOfStrings = ['html', 'css', 'javascript'];


    function analyzeAllWords(arrayOfStrings) {
        var outputArray = [];
        arrayOfStrings.forEach(function (element) {
            outputArray.push(analyzeWord(element));
        });
    }
    return outputArray;






        // Write a function named padArray. It should accept 3
    // arguments: an array, a length, and an element to fill
    // with. If the length of the passed array is less than
    // the passed length, the function should add the element
    // to fill with to the end of the array until the array is
    // the desired length and return the array. If the length of
    // the passed array is greater than or equal to the passed
    // length, the function should just return the array.

        function padArray(array, number, input){
            if(array.length >= number){
                return array;
            }
        for(var i = 0; i < number; i ++){
            array.push(input);
        }
        return array;
    }











})();


