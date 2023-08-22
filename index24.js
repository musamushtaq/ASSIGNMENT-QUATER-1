"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
let num1 = 8;
let num2 = 4;
console.log("TEST FOR EQUALITY AND INEQUALITY");
//EQUALITY
console.log("EQUALITY:", num1 === num1);
//INEQUALITY
console.log("INEQUALITY:", num1 === num2);
//LOWER CASE FUNCTION
console.log("TEST FOR LOWER CASE FUNCTION");
console.log("lowere case function:", 'HELLO'.toLowerCase() === 'hello');
console.log("false statement to lower case function:", 'HELLO'.toLowerCase() === 'Hello');
//EQUALITY AND INQUALITY TEST USING (<),(>),(<=),(>=)
console.log("EQUALITY AND INEQUALITY TEST USING SIGN");
console.log("TEST USING (<=):", num1 <= num2);
console.log("TEST USING(>):", num1 > num2);
console.log("TEST USING (<):", num1 < num2);
console.log("TEST USING (>=):", num1 >= num2);
//TEST USING OR(||) AND AND(&&) OPERATORS
console.log("TEST USING AND (&&) AND OR(||)");
console.log("AND (&&) FUNCTION:", num1 === num1 && num1 != num2);
console.log("AGAIN USING AND(&&) FUNCTION:", num1 > num2 && num1 < num2);
console.log("OR (||) FUNCTION:", num1 === num2 || num1 === num1);
console.log("AGAIN USING OR (||) FUNCTION:", num1 === num2 || num1 < num2);
//TESTING WHETHER AN ITEM IS IN ARRAY
console.log("TESTING WHETHER AN ITEM IS IN ARRAY");
let names = ["musa", "ibrahim", "baryal", "rameez", "ahmad"];
console.log("whether in array:", names.includes("musa"));
//TESTING WHETHER ITEM IS NOT IN ARRAY
console.log("WHETHER ITEM IS NOT IN ARRAY");
console.log("whether not in array:", names.includes("ali"));
