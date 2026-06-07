console.log('---- STRING ARRAY ----');

const stringArr = ['Kiyv', 'Poltava', 'Lviv', 'Odessa'];

stringArr.push('Harkiv');
stringArr.pop();
stringArr.shift();
stringArr.unshift('Capital');

console.log('indexOf Poltava:', stringArr.indexOf('Poltava'));

const combinedStrings = stringArr.concat(['Dnipro', 'Chernigiv']);

const filteredStrings = stringArr.filter(item => item.includes('a'));

const foundString = stringArr.find(item => item === 'Lviv');

const sortedStrings = [...stringArr].sort();

const totalLength = stringArr.reduce((acc, item) => acc + item.length, 0);

const groupedStrings = stringArr.reduce((acc, item) => {
    const key = item.length > 5 ? 'long' : 'short';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
}, {});

stringArr.forEach((item, index) => {
    console.log(index, item);
});

const upperCaseStrings = stringArr.map(item => item.toUpperCase());

console.log(combinedStrings, filteredStrings, foundString, sortedStrings, totalLength, groupedStrings, upperCaseStrings);


console.log('---- NUMBER ARRAY ----');

const numberArr = [10, 20, 30, 40];

numberArr.push(50);
numberArr.pop();
numberArr.shift();
numberArr.unshift(5);

console.log('indexOf 20:', numberArr.indexOf(20));

const combinedNumbers = numberArr.concat([60, 70]);

const filteredNumbers = numberArr.filter(item => item > 20);

const foundNumber = numberArr.find(item => item > 20);

const sortedNumbers = [...numberArr].sort((a, b) => a - b);

const sum = numberArr.reduce((acc, item) => acc + item, 0);

const groupedNumbers = numberArr.reduce((acc, item) => {
    const key = item > 20 ? 'big' : 'small';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
}, {});

numberArr.forEach((item, index) => {
    console.log(index, item);
});

const doubledNumbers = numberArr.map(item => item * 2);

console.log(combinedNumbers, filteredNumbers, foundNumber, sortedNumbers, sum, groupedNumbers, doubledNumbers);


console.log('---- BOOLEAN ARRAY ----');

const booleanArr = [true, false, true, false];

booleanArr.push(true);
booleanArr.pop();
booleanArr.shift();
booleanArr.unshift(false);

console.log('indexOf true:', booleanArr.indexOf(true));

const combinedBooleans = booleanArr.concat([true, false]);

const filteredBooleans = booleanArr.filter(item => item === true);

const foundBoolean = booleanArr.find(item => item === false);

const sortedBooleans = [...booleanArr].sort();

const countTrue = booleanArr.reduce((acc, item) => acc + (item ? 1 : 0), 0);

const groupedBooleans = booleanArr.reduce((acc, item) => {
    const key = item ? 'true' : 'false';
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
}, {});

booleanArr.forEach((item, index) => {
    console.log(index, item);
});

const invertedBooleans = booleanArr.map(item => !item);

console.log(combinedBooleans, filteredBooleans, foundBoolean, sortedBooleans, countTrue, groupedBooleans, invertedBooleans);


console.log('---- ANY ARRAY ----');

const anyArr = [1, 'text', true, null];

anyArr.push('new');
anyArr.pop();
anyArr.shift();
anyArr.unshift('start');

console.log('indexOf true:', anyArr.indexOf(true));

const combinedAny = anyArr.concat([100, false]);

const filteredAny = anyArr.filter(item => typeof item === 'string');

const foundAny = anyArr.find(item => typeof item === 'boolean');

const sortedAny = [...anyArr].map(String).sort();

const combinedString = anyArr.reduce((acc, item) => acc + ' ' + item, '');

const groupedAny = anyArr.reduce((acc, item) => {
    const key = typeof item;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
}, {});

anyArr.forEach((item, index) => {
    console.log(index, item);
});

const mappedAny = anyArr.map(item => `${item} (${typeof item})`);

console.log(combinedAny, filteredAny, foundAny, sortedAny, combinedString, groupedAny, mappedAny);
