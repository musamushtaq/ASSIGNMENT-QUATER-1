/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/


let alienColor = "BLUE";
let alienColor2 = "GREY";
let alienColor3 = "red";
//printing the first statement 
if (alienColor === "green") {
    console.log("you have earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("you have earned 10 points"); //CHANGING ALIENCOLOR TO PRINT THE SECOND STATEMENT
}
else if (alienColor3 === "red") {
    console.log("you have earned 15 points"); //CHANGING ALIENCOLOR2 TO PRINT THIRD STATEMENT
}