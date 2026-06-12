export function getArithAdd(inputArr) {
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
}

