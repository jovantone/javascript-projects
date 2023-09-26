const input = require('readline-sync');
let str = "LaunchCode";


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let newStr = str.slice(3);
console.log(newStr);
let newStr2 = newStr + 'Lau';
console.log(newStr2);

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`This is our original phrase, ${str}\nAnd this is our pig latiny result, ${newStr2}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let info = input.question("Which letters where moved and replaced? ");
console.log(info);

/* 3) Add validation to your code to deal with user inputs that are longer than the word.In such cases, default to moving 3 characters. 
Also, the template literal should note the error.*/

if (info === 'Lau') {
    console.log('Correct! Lau');
}
else {
    console.log('Please try again, incorrect answer.');
}

