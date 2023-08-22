/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/

//MAKING FRUITS ARRAY
let favorite_fruits = ["apple", "mango", "banana"];
//WRITTING IF STATEMENT
if (favorite_fruits.includes("apple")) {
    console.log("you like apples");
}
if (favorite_fruits.includes("mango")) {
    console.log("you like mango");
}
if (favorite_fruits.includes("banana")) {
    console.log("you like banana");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("you like watermelon");
}
if (favorite_fruits.includes("peach")) {
    console.log("you like peach");
}
