// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.


function oldAndEvent(number) {
    if(number % 2 === 1) {
        return number * 2;
    } else if(number % 2 === 0) {
        return number / 2;
    }
}
const num = 500151;
const result = oldAndEvent(num);
console.log(result)