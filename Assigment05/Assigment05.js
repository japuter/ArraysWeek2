'use strict';


function sortArray(numbersArray, order) {
  //create new array from the original to aavoid modifying it
  let sortedArray = [...numbersArray];

  if(order === 'asc') {
    sortedArray.sort((a, b) => a - b);
    return sortedArray;
  }
  else if(order ==='desc') {
    sortedArray.sort((a, b) => b - a);
    return sortedArray;
  }
}


//dis de hardcoded array of numbers
let haardCodedArray = [5, 3, 8, 23, 33, 2, 1, 8, 20, 2222];

console.log(sortArray(haardCodedArray, "asc"));
console.log(sortArray(haardCodedArray, "desc"))
