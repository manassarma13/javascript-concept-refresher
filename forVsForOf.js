const magicSquare = [[2, 7, 6], [9, 5, 1], [4, 3, 8]];

// Version using a for loop...
for (let i = 0; i < magicSquare.length; i++) {
    let row = magicSquare[i];
    let sum = 0;
    for (let j = 0; j < row.length; j++) {
        sum += row[j];
    }
    console.log(`${row} summed to ${sum}`);
}

// Much cleaner version using a for...of
for (let row of magicSquare) {
    let sum = 0;
    for (let num of row) {
        sum += num;
    }
    console.log(`${row} summed to ${sum}`);
}

//Here
// If you need the indices, use a for loop!
const fName = ['Bruce', 'Clerk', 'Diana', 'John'];
const lName = ['Wayne', 'Kent', 'Prince', 'Jones'];

for (let i = 0; i < fName.length; i++) {
    //Access index i of both arrays
    console.log(`${fName[i]} ${lName[i]}`);
}
