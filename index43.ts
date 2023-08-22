//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let Magicians1=["musa","baryal","ibrahim","ahmad"];
let Magicians2=["musa","baryal","ibrahim","ahmad"];

function show_magicians(Magicians1:string[]):string[]{
    for(let magicians of Magicians1){
        console.log(magicians)
    }
    return Magicians1;


    
}
let magician=show_magicians(Magicians1)
console.log(magician)
function show_magicians2(Magicians2:string[]):string[]{
    for(let magicians of Magicians2){
        console.log(`great ${magicians}`)
    }
    return Magicians2;
    
}
let magician2=show_magicians2(Magicians2)
console.log(magician2)