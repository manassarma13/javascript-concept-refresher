const totalExpenses = {
    food: 8000,
    clothes: 1000,
    rent: 5000,
    medicine: 5000,
    misc: 2000
};

let total = 0;

for (let amount in totalExpenses) {
    console.log(amount);
    console.log(totalExpenses[amount]);
    total += totalExpenses[amount];
}

console.log(`My total expense is :${total}`);