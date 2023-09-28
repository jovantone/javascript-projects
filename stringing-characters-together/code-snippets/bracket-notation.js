// Character Index

let jsCreator = "Brendan Eich";

console.log(jsCreator[1]);
console.log(jsCreator[2]);

let myStr = 'Index';
console.log(myStr[2]);

let phrase = "JavaScript rocks!";
console.log(phrase[phrase.length - 8]);

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " +  stateName;

console.log(location.length);

// Immutability
pet = 'cat';
console.log(pet + 's');

// String Method
let nonprofit = "LaunchCode";

console.log(nonprofit.toLowerCase());
console.log(nonprofit);

let language = "JavaScript";

console.log(language.slice(1,6));
console.log(language);

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

console.log('Launch\nCode');

// ARRAYS

let emptyArray = [];
console.log(emptyArray.length);

let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];
console.log(programmingLanguages.length);

const classes = ["science, computer, art"];
console.log(classes.length);

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);


let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

const school = [
   ["science", "computer", "art"],
   ["Jones", "Willoughby", "Rhodes"]
];
let newSubject = 'dance';
let newStaff = 'Holmes';

school.push
