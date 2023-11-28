/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [28, 37, 20];
//let jake = ages[0]
//let thomas = ages[1]
//let michael = ages[2]
let [jake, thomas, michael] = ages;
console.log(jake, thomas, michael);

// Destructuring objects
let jobs = {
    patrick: "System Administrator",
    lucas: "Cybersecurity Analyst",
    darren: "Network Engineer"
}

let { patrick, lucas, darren } = jobs;
console.log(patrick, lucas, darren);

// Destructuring subsets
let languages = ["English", "Spanish", "German", "Portuguese"];
let [adamNative, adamSecondary] = languages;
let [, , sarahNative, sarahSecondary] = languages; //the two commas skip assigning [0] & [1] from the array
console.log(adamNative, adamSecondary);
console.log(sarahNative, sarahSecondary);

let languages2 = {
    firstLanguage: "Swedish",
    secondLanguage: "Italian",
    thirdLanguage: "Ukranian",
    fourthLanguage: "Chinese",
};

let {firstLanguage, fourthLanguage} = languages2;
console.log(firstLanguage, fourthLanguage)

// Using rest parameter syntax
let fruits = ["Cherries", "Apples", "Bananas", "Pears", "Grapes", "Oranges", "Kiwis"];
let [favourite1, favourite2, ...others] = fruits
console.log(favourite1, favourite2)
console.log(others)

let favouriteDrinks = {
    garry: "Lager",
    douglas: "Whiskey",
    lisa: "Rioja",
    matthew: "Cider",
    alison: "Vodka"
};

let {garry, matthew, ...otherDrinks} = favouriteDrinks
console.log(garry, matthew)
console.log(otherDrinks)