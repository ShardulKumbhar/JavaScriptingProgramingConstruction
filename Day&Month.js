const prompt = require('prompt-sync')();
//taking user input as constant
const day = prompt('Enter a day "1 to 31": ');
const month = prompt('Enter a number of month : ');

if((day >= 20 && day <= 31 && month == '3') || 
(day >= 1 && day <= 30 && month == '4') ||
(day >= 1 && day <= 31 && month == '5') || 
(day >= 1 && day <= 20 && month == '6')) {
        console.log(true);
}
else {
    console.log(false);
}