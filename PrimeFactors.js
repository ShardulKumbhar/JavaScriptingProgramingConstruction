
const prompt = require('prompt-sync')();

//taking user input
let number = prompt("Enter the Number : ");
const n=2;

while(number % 2 == 0) {
    console.log(2+' ');
    number= number/ 2;
}

for(let i = 3; i*i <= number; i++) {
    while(n % i == 0) {
        console.log(i+' ');
        number= number/i;
    }
}

if(number > 2) {
    console.log(n);
}