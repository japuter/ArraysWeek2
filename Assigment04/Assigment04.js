'use strict';


function sortArray(numbersArray) {
  //create new array from the original to aavoid modifying it
  let sortedArray = [...numbersArray];
  sortedArray.sort((a, b) => a-b);
  return sortedArray; // Returns sorted array
}


//dis de hardcoded array of numbers
let haardCodedArray = [5, 3, 8, 23, 33, 2, 1, 8, 20, 2222];


let sortedArray = sortArray(haardCodedArray);


console.log("Original array:", haardCodedArray);
console.log("sorted array:", sortedArray);
