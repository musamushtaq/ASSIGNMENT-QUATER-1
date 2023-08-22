/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/

//LOCATION
const favouriteLocation = ["America", "Germany", "Australia", "Canada", "Tokyo"];
//ORIGINAL ORDER
console.log("Original Order:", favouriteLocation);
//ALPHABETIC ORDER
console.log("Alphabetical Order:", [...favouriteLocation].sort());
//BACK TO ORIGINAL ORDER
console.log("Still Original Order:", favouriteLocation);
//REVERSE ALPHABETIC ORDER
console.log("Reverse Alphabetical Order:", [...favouriteLocation].sort().reverse());
//AGAIN BACK TO ORIGINAL ORDER
console.log("Still Original Order:", favouriteLocation);
//REVERSER ORDER
favouriteLocation.reverse();
console.log("Reversed Order:", favouriteLocation);
//ORIGINAL ORDER
favouriteLocation.reverse();
console.log("Back to Original Order:", favouriteLocation);
//ALPHABETICAL ORDER
favouriteLocation.sort();
console.log("Sorted in Alphabetical Order:", favouriteLocation);
//REVERSE ALPHABETICAL ORDER
favouriteLocation.sort((a, b) => b.localeCompare(a));
console.log("Sorted in Reverse Alphabetical Order:", favouriteLocation);