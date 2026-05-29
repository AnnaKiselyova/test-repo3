const a = 11;
const b = '5';
const c = 30;

if (a > b) {
    console.log('a > b');
} else if (a < b) {
    console.log('a < b');
} else {
    console.log('a === b');
}

if (a > b && a > c) {
    console.log('a > b && a > c');
} else if (a > b && a < c) {
    console.log('a > b && a < c');
} else {
    console.log('a < b && a > c');
}

if (a > b || a > c) {
    console.log('a > b || a > c');
} else if (a > b || a < c) {
    console.log('a > b || a < c');
} else {
    console.log('a < b || a > c');
}

console.log('----Виконання конструкцій----');
if (a > b) {
    console.log('It is true');
} else if (a < b) {
    console.log('It is false');
} else {
    console.log('c = 20');
}

if (a) {
    console.log(a, ' is value of a');
}

console.log('----Скорочений запис----');
const d1 = typeof b === 'string' ? b : 'string (b)';
console.log(d1);
const e1 = typeof c === 'number' ? c : 'number (c)';
console.log(e1);
const d2 = typeof b == 'string' ? b : 'string (b)';
console.log(d2);
const e2 = typeof c == 'number' ? c : 'number (c)';
console.log(e2);
const d3 = typeof b !== 'string' ? b : 'string (b)';
console.log(d3);
const e3 = typeof c !== 'number' ? c : 'number (c)';
console.log(e3);
