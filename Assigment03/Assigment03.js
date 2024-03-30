'use strict';


let numbers = [];

while (confirm('Do you want to enter a number: ')) {
  let input = prompt('Enter a number: ')
  if (input !== null) numbers.push(Number(input));
}


let evenNumbers = [];


for (const num of numbers) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  }
}

if (evenNumbers.length > 0) {
  document.getElementById('output').innerHTML = ('Even numbers: ' + evenNumbers.join(", "))
} else {
  document.getElementById('output').innerHTML = ('Even numbers: none')
}
