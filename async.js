//How asynchronous code runs

console.log("Start-Node");

//Browser keeps track of the timeout, 
//The callstack doesn't 

setTimeout(() => {
    console.log('Delayed code')
}, 3000);

console.log("End-Node");