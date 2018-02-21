const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];


console.log(users.filter(user => user.languages.length >= 3));

const Emailmap = users.map(user => user.email);
    console.log(Emailmap);


const refactor = users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
}, {});

console.log(refactor);

//------_--_----------_---------_--_---------_-_------------------------_-__----BONUSES

const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];
const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];
// // PROBLEM 1 - create an array of the first letters of each fruit
// //use map
//
const fruitsFirstLetter =  fruits.map(fruit => fruit.charAt(0));
console.log(fruitsFirstLetter);
//
//
// PROBLEM 2 - create array of user objects based on the customers array
// of objects (each user object should just have name and age properties)
//
//
const nameAge = customers.map(customer => {return {name: customer.name, age: customer.age}});
console.log(nameAge);

const ageName = customers.reduce((acc, obj) => {
    acc.push(obj.name);
    acc.push(obj.age);

    return acc;
}, []);
console.log(ageName);


// PROBLEM 3 - create an array of civil servant customers (teachers and police officers)
// // containing the same properties as the objects on the customers objects

const civilServants = customers.filter(customer => {
       return customer.occupation === "Teacher" || customer.occupation === "Police Officer";
   }
);
console.log(civilServants);
//
// // PROBLEM 4 - determine the average age of customers
//
const averageAge = customers.reduce((total, customer) =>  {
    return total + customer.age / customers.length;
}, 0);

console.log(averageAge);

// //            PROBLEM 1 HINT - use .map()
// //            PROBLEM 2 HINT - use .map()
// //            PROBLEM 3 HINT - use .filter()
// //            PROBLEM 4 HINT - use .reduce()
//
//
//
//
// Given the following array...
const family = [
    {
        name: "Karen",
        gender: "female",
        age: 29,
    },
    {
        name: "Summer",
        gender: "female",
        age: 10,
    },
    {
        name: "Bob",
        gender: "male",
        age: 32,
    },
];
// complete the bonuses below...
// - Calculate the average age of family members
// - Create an array of family objects without the age property
// - Create an array of all minors
// - Calculate the total age combined of family members
// - Create an array of only female family member objects
// - Create a single object with properties containing arrays of all names, genders, and age