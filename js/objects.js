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





})();


