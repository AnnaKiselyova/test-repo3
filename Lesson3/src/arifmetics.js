let a = 7;
const b = '4';

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


a += a;
console.log(a);
a -= a;
console.log(a);
a = 3;
a *= b;
console.log(a);
a /= b;
console.log(a);
a %= b;
console.log(a);

a = 0.4;
a **= b;
console.log(a);
a **= a;
console.log(a);
a++ ;
console.log(a);
a-- ;
console.log(a);

a = 9;
console.log(Math.sqrt(a));
console.log(Math.pow(a, 3));
console.log(Math.abs(-a));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.min(3, 5, 1, 9, 2));
console.log(Math.max(3, 5, 1, 9, 2));
console.log(Math.random());
console.log(Math.log(a));
console.log(Math.exp(2));
console.log(Math.cos(60 * 3.14159 / 180));
console.log(Math.sin(30 * 3.14159 / 180));

console.log(Math.max(0, 1000, 30, -20, -8, 1.0001));
console.log(Math.min(0, 1000, 30, -20, -8, 1.0001));
