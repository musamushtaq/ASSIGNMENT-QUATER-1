/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.*/

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
//number of guest invited
console.log("Number of people i invited to the dinner:", guestNames.length);