const a = 100;
const b = '300';
const c = 302;
const d = undefined;

console.log(c < b);

console.log(a > b && b >= c);
console.log(a < b && b >= c);

console.log(a > b || b >= c);
console.log(a < b || b >= c);
console.log(a < b || b < c);

//Logical NOT
console.log(!(a > b));
console.log(!(a < b));
console.log(!(b >= c));

const bird = 'notBird';
console.log(bird);
console.log(bird == 'cat');
console.log(!(bird == 'cat'));
console.log(!(bird));
console.log(!(bird !== 'cat'));

const f1 = d ?? 13;
console.log(f1);
const f5 = d ?? '2026 year';
console.log(f5);
