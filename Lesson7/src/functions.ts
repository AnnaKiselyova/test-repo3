export function getArithAdd(inputArr: (number | string)[]): number {
    let sum = 0;

    inputArr.forEach((element: number | string) => {
        if (typeof element === 'number') {
            sum += element;
        }
    });

    return sum;
}

