//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message

function make_shirt(size:string){
    console.log("size:",`${size}`)
    if(size==="large"){
        console.log("i love typescript")
        console.log()
    }else if(size==="medium"){
        console.log("i love typescript")
        console.log()
    }else{
        console.log("custom size")
        console.log()
    }
}
make_shirt("large");
make_shirt("medium");
make_shirt("small");
console.log("any shirt would look great");