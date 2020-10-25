//test values
const numbers = [1, 5, 234, 8, 67];
const stringsArr = [
  "banana",
  "apple",
  "passion fruit",
  "cabbage",
  "apple",
  "banana",
];
const x = 23;
const y = 3;

const a = 42;
const b = 11;
const c = 12;

const matrix = 

[[12, 36, 2, 8], [67, 12, 13, 99], [35, 67, 89, 4], [0, 34, 19, 20], [30, 5, 1, 78]];

function product(x, y) {
  return x * y;
}
console.log("Write a function that returns the product of 2 numbers");
console.log(product(a, b));

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log("Write a function that returns whether a given number is even");
console.log(isEven(a));

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log("Write a function Return the largest of 2 numbers");
console.log(maxOfTwoNumbers(a, b));

// Return the largest of 3 numbers

function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

console.log("Write a function Return the largest of 3 numbers");
console.log(maxOfThreeNumbers(a, b, c));

// Calculate the sum of an array of numbers

function sumArray(numbers) {
  const sumNumbers = numbers.reduce(function (total, num) {
    return total + num;
  }, 0);
  return sumNumbers;
}
console.log("Calculate the sum of an array of numbers");
console.log(sumArray(numbers));

////////////start here to redo!!!

// Return the largest number of a non-empty array by using sort

function maxOfArray(array) {
  const sorted = array.sort(function (a, b) {
    return b - a;
  });
  return sorted[0];
}
console.log("Calculate the max of an array of numbers by sorting");
console.log(maxOfArray(numbers));

// OR return the largest number of a non empty array by using reduce

function maxOfArray(array) {
  const reduced = array.reduce(function (max, num) {
    return num > max ? num : max;
  }, 0);
  console.log(reduced);
  return reduced;
}
console.log("Calculate the max of an array of numbers by reducing");
console.log(maxOfArray(numbers));

// Return the longest string in an array

// Return the longest string in an array by using sort

function longestString(array) {
  const sorted = array.sort(function (a, b) {
    return b.length - a.length;
  });
  const longestStr = sorted[0];
  return longestStr;
}
console.log("Calculate the longest string in an array by sorting");
console.log(longestString(stringsArr));

// Return the longest string in an array by using reducing

function longestStringReducing(array) {
  const reduced = array.reduce(function (longestWord, word) {
    return word.length > longestWord ? word : longestWord;
  }, "");
  console.log(reduced.length);
  console.log(reduced);
  return reduced.length;
  return reduced;
}
console.log("Calculate the longest string by reducing");
console.log(longestStringReducing(stringsArr));

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  // if word exists then arr.indexOf(word)!== 0
  if (wordsArr.includes(word)) return true;
  else {
    return false;
  }
}

console.log(doesWordExist(stringsArr, "banana"));

// Finding the first non-duplicate (non-repeating) word in an array

function findUnique(wordsArr) {
  const uniqueWords = wordsArr.filter((el, i, arr) => arr.indexOf(el) === i);
  return uniqueWords[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  const fullName = personObj.firstName + " " + personObj.lastName;
  return fullName;
}

// Return the largest number in a two dimensional array
// function maxTwoDimArray(matrix) {}
// filter through 1st array and create an array of max numbers then through the second array. use callback fn findmax
