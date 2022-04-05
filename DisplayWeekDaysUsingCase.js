const prompt = require('prompt-sync')();
//taking user input as constant

const x = prompt('Enter the Week Day : ');
//matching with 
let a;
switch (x) {
    case '1':
        a = "Monday";
        break;
    case '2':
        a = "Tuesday";
        break;
    case '3':
        a = "Wednesday";
        break;
    case '4':
        a = "Thursday";
        break;
    case '5':
        a = "Friday";
        break;
    case '6':
        a = "Saturday";
        break;
    case '7':
        a = "Sunday";
        break;
    default:
        a = "please enter a single digit week day";
}
console.log(a);