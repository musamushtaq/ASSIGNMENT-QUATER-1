"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/
let guestNames = [
    "Ibrahim",
    "Baryal",
    "Umar",
];
guestNames.forEach((guestNames) => {
    console.log(`${guestNames}`);
});
//message to invite guest.
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I would like to invite your family for dinner`);
});
//GUEST WHO CANT MAKE IT TO DINNER
let cannotAttend = "Umar";
console.log(`${cannotAttend} will not be able to make it to the dinner.`);
//NEW GUEST
guestNames.splice(2);
guestNames.splice(1, 0, "Ali");
guestNames.forEach((guestNames) => {
    console.log(`${guestNames}`);
});
console.log("guestNames", guestNames);
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I would like to invite your family for dinner as umar cant come`);
});
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I have founded a bigger table which will arive before the dinner so I would like to invite some more guests.`);
});
//NEW GUEST AT THE STARTING OF THE ARRAY
guestNames.unshift("Fatima");
console.log("guestNames", guestNames);
//NEW GUEST AT THE MIDDLE OF THE ARRAY
guestNames.splice(2, 0, "Gulalai");
console.log("guestNames", guestNames);
//NEW GUEST AT THE END 
guestNames.push("Bia");
console.log("guestNames", guestNames);
//INVITING PEOPLE
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I would like to invite your family to a dinner`);
});
