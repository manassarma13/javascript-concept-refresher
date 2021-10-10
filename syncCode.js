//How synchronous code works!

function nFunction(){
    console.log("1st Function Call");
    console.log("2nd Function Call");
}

console.log ('Start-Node');

nFunction();

console.log('End-Node');