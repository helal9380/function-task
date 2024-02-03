
let array = [5,6,87,21,54,14];
const multifly = (element, index, array) => {
    let multFive = parseInt(element) * 5;
    return multFive;
}
let arr = array.map(multifly)
console.log(arr)
