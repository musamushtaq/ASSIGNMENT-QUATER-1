"use strict";
/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
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
//MESSAGING GUEST TO CANCEL THEIR INVITATION
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I am so sorry to tell you that the table won't be arriving till monday so i have to cancel your invitation. I can invite only two peoples.`);
});
//REMOVING GUESTS
guestNames.pop();
console.log("guestNames", guestNames);
let name1 = "Bia";
console.log(`${name1} sorry i couldn't invite you to the dinner.`);
guestNames.pop();
console.log("guestNames", guestNames);
let name3 = "Ali";
console.log(`${name3} sorry i couldn't invite you to the dinner.`);
guestNames.pop();
console.log("guestNames", guestNames);
guestNames.pop();
let name4 = "Gulalai";
console.log(`${name4} sorry i couldn't invite you to the dinner.`);
//PRINTTING MESSAGE TO THE LAST TWO PEOPLES
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I would like to invite your family for dinner.`);
});
//REMOVING THE LAST TWO NAMES 
guestNames.pop();
console.log("guestNames", guestNames);
guestNames.pop();
console.log("guestNames", guestNames);
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I would like to invite your family for dinner.`);
});
