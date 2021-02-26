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
    var person = {};
    person.firstName = "Roland";
    person.lastName = "Valdez";
    console.log(person.firstName);
    console.log(person.lastName);
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function() {
        console.log("Hello from " + this.firstName + " " + this.lastName + "!")
    }
    person.sayHello();

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
    shoppers.forEach(function(shopper){
        if (shopper.amount > 200){
            var discountAmount = shopper.amount * 0.12;
            var discountTotal = shopper.amount - discountAmount;
            console.log("Hello " + shopper.name + " your total before discount is $" + shopper.amount.toFixed(2) + " and you will receive a discount of $" + discountAmount.toFixed(2) + " so your total purchase amount after discount is $" + discountTotal.toFixed(2) + ".")
        }
        else {
            console.log("Hello " + shopper.name + " you did not purchase enough to receive a discount so your total will be $" + shopper.amount.toFixed(2) + ".")
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
        {title: "Becoming a Developer", author: {firstName:"Douglas", lastName: "Hirsh"}},
        {title: "My life from teaching to car sales to teaching!", author:{firstName:"Kenneth", lastName: "Howell"}},
        {title: "My journey through Codeup", author: {firstName:"Roland", lastName: "Valdez"}},
        {title: "Creating developers for the 21st century", author:{firstName: "Jason", lastName: "Straughan"}},
        {title: "What did we get into?", author:{firstName:"Marco", lastName: "Cohort"}}
    ]
    // /**
    //  * TODO:
    //  * Loop through the books array and output the following information about
    //  * each book:
    //  * - the book number (use the index of the book in the array)
    //  * - the book title
    //  * - author's full name (first name + last name)
    //  *
    //  * Example Console Output:
    //  *
    //  *      Book # 1
    //  *      Title: The Salmon of Doubt
    //  *      Author: Douglas Adams
    //  *      ---
    //  *      Book # 2
    //  *      Title: Walkaway
    //  *      Author: Cory Doctorow
    //  *      ---
    //  *      Book # 3
    //  *      Title: A Brief History of Time
    //  *      Author: Stephen Hawking
    //  *      ---
    //  *      ...
    //  */
    //

    books.forEach(function(books, index){
    showBookInfo(books, index);//refactored from bonus problem
    //     console.log("Book #" + (index + 1));
    //     console.log("Title: " + books.title);
    //     console.log("Author: " + books.author.firstName + " " + books.author.lastName);
    //     console.log("---");
    });
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
    // function createBook(){
    //     var books = [];
    //     do {
    //         var input = {title:"", author:{firstName:"", lastName:""}};
    //         input.title = prompt("What is the title of the book?");
    //         input.author.firstName = prompt("What is the first name of the author?");
    //         input.author.lastName = prompt("What is the last name of the author?");
    //         books.push(input);
    //         var moreBooks = confirm("Do you want to add another book?");
    //     }while(moreBooks === true);
    //     return books;
    // }
    function createBook(){
        var books = [];
        do {
            var input = {title:"", author:{firstName:"", lastName:""}};
            input.title = prompt("What is the title of the book?");
            input.author.firstName = prompt("What is the first name of the author?");
            input.author.lastName = prompt("What is the last name of the author?");
            books.push(input);
            var moreBooks = confirm("Do you want to add another book?");
        }while(moreBooks === true);
        return books;
    }

    function showBookInfo(booksLog, index){
            console.log("Book #" + (index + 1));
            console.log("Title: " + booksLog.title);
            console.log("Author: " + booksLog.author.firstName + " " + booksLog.author.lastName);
            console.log("---");
    }

    var booksLog = createBook();

    booksLog.forEach(function (booksLog, index){
        showBookInfo(booksLog, index);
    });

})();
