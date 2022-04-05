const prompt = require('prompt-sync')();
//taking user input as constant
const year = prompt('Enter the Year : ');

if(year % 4 == 0) {
    if(year % 100 == 0) {
        if(year % 400 == 0) 
            console.log('It\'s a leap year');
        else 
            console.log('Not a leap year');
    } else {
        console.log('It\'s a leap year');
    }
}else {
    console.log('Not a Leap Year');
}