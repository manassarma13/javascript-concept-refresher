// in reduce, accumulator goes over each array 
// and value represents each element
// so retun the accumulator

const vals = [10, 5, 25, 20, 7, 13]
//Reduce and calculate sum
const sum = vals.reduce((acc, val) => acc + val);
console.log('sum =', sum);
//Max of array
const largest = vals.reduce((acc, val) => acc > val ? acc : val);
console.log("largest is", largest);

//Displaying same array using reduce
const fruits = ['apple', 'banana', 'mango', 'orange']
const fruitsReduce = fruits.map((fruit) => fruit);
console.log(fruitsReduce);