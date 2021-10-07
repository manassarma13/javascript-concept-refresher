const vals = [10, 5, 25, 20, 7, 13]         // inreduce accumulator goes over each array 
                                            // and value represents each element
                                            // so retun the accumulator

//Reduce and calculate sum

const sum = vals.reduce((acc,val) => acc + val);
console.log('sum =', sum);

//Max of array

const largest = vals.reduce((acc,val) => acc > val ? acc : val);
console.log("largest is", largest);