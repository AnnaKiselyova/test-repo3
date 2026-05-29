const weather = 'sunny';
switch (weather) {
    case 'rain': {
        console.log('Fall');
        break;
    }
    case 'snow': {
        console.log('winter');
        break;
    }
    case 'sunny': {
        console.log('Summer');
        break;
    }
}

const year = 2026;

switch (year) {
    case 2025: {
        console.log('previous');
        break;
    }
    case 2026: {
        console.log('current');
        break;
    }
    case 2027: {
        console.log('next');
        break;
    }
    default: {
        console.log('Unknown year');
    }
}

const month = 5;
switch (typeof month) {
    case 'number': {
        console.log('This is number type');
        break;
    }
    case 'string': {
        console.log('This is string type');
        break;
    }
    case 'boolean': {
        console.log('This is boolean type');
        break;
    }
    default: {
        console.log('Unknown type');
    }
}
