for (let i = 1; i <= 10; i++) {
    console.log('OUTER LOOP:', i);
    for (let j = 10; j >= 0; j -= 2) {
        console.log('  INNER LOOP', j);
    }
}

// Sum all elements in our 2048 board
const gBoard = [
    [2, 32, 8, 4],
    [64, 8, 2, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 64]
];

let totalScore = 0;
//outer loop iterates through the rows
for (let i = 0; i < gBoard.length; i++) {
    let row = gBoard[i];
    console.log(row);
    //inner loop iterates over each cell in a given row
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
        totalScore += row[j];
        console.log('Total score is', totalScore);
    }
}