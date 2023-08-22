"use strict";
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    if (items == undefined) {
        console.log("not specified");
    }
    else {
        for (let item of items) {
            console.log("-" + item);
        }
    }
    console.log("\n");
}
sandwich("mushroom", "letice");
sandwich("cheez", "mushrooms");
sandwich("onion", "salad", "chicken");
