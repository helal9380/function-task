
let array = [15, 52, 14, 30, 85, 36, 87, 33];
function dividedThree(num) {
    return num % 2 === 0;
}
const result = array.filter(dividedThree)
console.log(result)