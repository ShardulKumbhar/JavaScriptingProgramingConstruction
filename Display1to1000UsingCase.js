const prompt = require('prompt-sync')();
//taking user input as constant

const x = prompt("Enter a number as multiple of 10  : ");

let text;
switch (x) {

    case '10':
        a = "Ten";
        break;
    case '1':
        a = "Unit";
        break;
    case '100':
        a = "Hundred";
        break;
    case '1000':
        a = "Thousand";
        break;
    default:
        a = "please enter number like 1,10,100,1000";
}
console.log(a);
