import { getArithAdd } from './functions.js';

const arr1 = [5, -12, 25, 29, 35, 40];
const arr2 = ['river', 'sea', 'lake', 'ocean'];

console.log('sum of numbers', getArithAdd(arr1)); // 122
console.log('sum of strings', getArithAdd(arr2)); // 0
