const getArithAdd = (inputArr) => {
    if (!Array.isArray(inputArr)) {
        console.log('Input is not an array');
        return;
    }

    let sum = 0;

    inputArr.forEach(element => {
        if (typeof element === 'number') {
            sum += element;
        }
    });

    return sum;
};

const arr1 = [5, -12, 25, 29, 35, 40];
const arr2 = ['river', 'sea', 'lake', 'ocean'];

console.log('sum of numbers', getArithAdd(arr1)); // 122
console.log('sum of strings', getArithAdd(arr2)); // 0
