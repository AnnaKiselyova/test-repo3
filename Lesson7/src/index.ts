
import { getArithAdd } from './functions';
import { getArithAddArrow } from './arrow-functions';

const arr1: number[] = [5, -12, 25, 29, 35, 40];
const arr2: string[] = ['river', 'sea', 'lake', 'ocean'];

console.log('sum of numbers', getArithAdd(arr1)); // 122
console.log('sum of strings', getArithAdd(arr2)); // 0

console.log('sum of numbers (arrow)', getArithAddArrow(arr1));
console.log('sum of strings (arrow)', getArithAddArrow(arr2));


