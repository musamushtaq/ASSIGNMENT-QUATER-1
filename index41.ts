//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician=["baryal","musa","ibrahim","hamzah"];
function show_magicians(magician:string[]){
    for( let magicians of magician){
        console.log(magicians);
    }
}
show_magicians(magician);
magician.splice(2,0,"ali");
show_magicians(magician);