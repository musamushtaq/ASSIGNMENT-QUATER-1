"use strict";
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
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
//GUEST WHO CANT MAKE IT TO THE DINNER
let cannotAttend = "Umar";
console.log(`${cannotAttend} will not be able to make it to the dinner.`);
//REPLACING GUEST NAME
guestNames.splice(2);
guestNames.splice(1, 0, "Ali");
guestNames.forEach((guestNames) => {
    console.log(`${guestNames}`);
});
console.log("guestNames", guestNames);
guestNames.forEach((guestNames) => {
    console.log(`${guestNames} I would like to invite your family for dinner as umar cant come`);
});
