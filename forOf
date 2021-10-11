let interests = ['soccer', 'coding', 'comics', 'movies'];
// With a standard for loop
for (let i = 0; i < interests.length; i++) {
    console.log(interests[i]);
}

console.log('=====seperation=====')


//Much cleaner  with a for...of loop!
for (let interest of interests) {
    console.log(interest);
}
//Works with other iterables, like strings!
for (let char of 'anti-matter') {
    console.log(char.toUpperCase());
}


//Second Example

const movieReviews = {
    A: 9.5,
    B: 9,
    C: 8,
    'D': 9,
    E: 10,
    'F': 8,
    'G': 8.5,
    H: 7.5
};

// THIS DOES NOT WORK!
// OBJECTS ARE NOT ITERABLE (can't use a for...of loop)
// for (let x of movieReviews) {
// 	console.log(x);
// }

// We CAN iterate over the keys of an object
for (let movie of Object.keys(movieReviews)) {
    console.log(`You rated ${movie} - ${movieReviews[movie]}`);
}

// We can also iterate over the values
// To calculate the average movie rating:
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
    total += r;
}
let avg = total / ratings.length;
console.log('Average Rating: ', avg);
