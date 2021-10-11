//EXAMPLE 1 -- no arguments --
// Define our first function
function rollDie() {

    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

// We can call functions inside of other functions!
function rollDice() {
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
    rollDie();
}

//Call it!
rollDice();

// EXAMPLE 2 --single arguments --
// greet now expects a single argument
function greet(nickname) {
    console.log(`Hi, ${nickname}!`);
}
greet('Nae');
greet('Manas');

// EXAMPLE 3  -- Arguments --
function rollDie() {
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}
// We can now specify how many dice to roll!
function throwDice(numRolls) {
    for (let i = 0; i < numRolls; i++) {
        rollDie();
    }
}

throwDice(2);
throwDice(6);

// EXAMPLE 4  -- Multiple Arguments --

function square(num) {
    console.log(num * num);
}

function sum(x, y) {
    console.log(x + y);
}

function divide(a, b) {
    console.log(a / b);
}

// EXAMPLE 5  -- RETURN --

// No return!
function add(x, y) {
    console.log(x + y);
}

// This version returns the sum of x & y;
function add(x, y) {
    return x + y;
}

// We can capture the return value:
const total = add(4, 9); //13

function square(x) {
    return x * x;
    console.log('ALL DONE!'); //this NEVER runs;
}

// EXAMPLE 6  -- MULTIPLE -RETURN --

// One way of writing this function
function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    else {
        return false;
    }
}

// We don't need the else!
function isPurple(color) {
    if (color.toLowerCase() === 'purple') {
        return true;
    }
    return false;
}

// An even shorter way!
function isPurple(color) {
    return color.toLowerCase() === 'purple';
}

function containsPurple(arr) {
    for (let color of arr) {
        if (color === 'purple' || color === 'magenta') {
            return true;
        }
    }
    return false;
}

