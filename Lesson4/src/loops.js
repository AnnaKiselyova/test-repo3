console.log('----Loop from 0 to 9 (for)----');

for (let i = 0; i <= 9; i++) {
    console.log(i);
}

console.log('----Loop from 0 to 9 (while)----');

let i = 0;
while (i <= 9) {
    console.log(i);
    i++;
}

console.log('----Loop from 0 to 9 (do...while)----');

let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 9);

console.log('----Loop from 100 to 0----');

for (let k = 100; k >= 0; k -= 10) {
    console.log(k);
}

console.log('----Loop from 100 to 0 (while)----');

let d = 100;
while (d >= 0) {
    console.log(d);
    d -= 10;
}


console.log('----Loop from 100 to 0 (do...while)----');


let m = 100;
do {
    console.log(m);
    m -= 10;
} while (m >= 0);

