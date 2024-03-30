'use strict';

let array = [];

let number1 = parseInt(prompt('Enter a number: '), 10);
let number2 = parseInt(prompt('Enter a number: '), 10);
let number3 = parseInt(prompt('Enter a number: '), 10);
let number4 = parseInt(prompt('Enter a number: '), 10);
let number5 = parseInt(prompt('Enter a number: '), 10);



array.push(number1, number2, number3, number4, number5);


document.getElementById('output').innerHTML = 'Entered numbers: ' + array;

let checknum = parseInt(prompt('Enter a number to check: '), 10);

if(array.includes(checknum)) {
  document.getElementById('output2').innerHTML = 'The array includes your number';
}else {
document.getElementById('output2').innerHTML = 'The array does not include your number';
}

array.pop()

console.log(array) // Deleted the last number


array.sort((a,b) => a-b);

console.log(array);
