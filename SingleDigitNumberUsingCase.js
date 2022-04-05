const prompt = require('prompt-sync')();
//taking user input as constant
const x = prompt('Enter the a single digit number : ');
//matching with 
let a;
switch (x) {
    case '0':
        a = "Zero";
        break;
    case '1':
        a = "One";
        break;
    case '2':
        a = "Two";
        break;
    case '3':
        a = "Three";
        break;
    case '4':
        a = "Four";
        break;
    case '5':
        a = "Five";
        break;
    case '6':
        a = "Six";
        break;
    case '7':
        a = "Seven";
        break;
    case '8':
        a = "Eight";
        break;
    case '9':
        a = "Nine";
        break;
    default:
        a = "Not a single digit no.";
}
console.log(a);