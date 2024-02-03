// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(strings) {
    let count = 0;
    for(const str of strings) {
        const toString = parseInt(str)
        if(toString === 0){
            count++;
        }
    }
    console.log('zero are :',count, 'times')
}

const string = '011010001010101';
count_zero(string)
