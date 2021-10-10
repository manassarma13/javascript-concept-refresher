//How asynchronous code runs

console.log("Start-Node");

//Web Apis in the browser keeps track of the timeout, 
//The callstack doesn't 

setTimeout(() => {
    console.log('Delayed code')
}, 3000);

console.log("End-Node");