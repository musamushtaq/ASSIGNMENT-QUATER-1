"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let PersonName = "musa mushtaq";
//Step 1 in Lowercase Letters
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
//Step 2 in Uppercase Letters
let uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
//Step 3 in Titlecase Letters
let titlecaseName = "";
let words = PersonName.split(" ");
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecaseName);
