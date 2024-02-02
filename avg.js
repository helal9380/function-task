// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

// 

function make_avg(arrays) {
    let sum = 0;
    for(const array of arrays) {
       sum = sum += array;
    }
    return sum / arrays.length;
}

const array = [28, 55,56, 8,50, 54,];
const result = make_avg(array)
console.log(parseInt(result.toFixed()))