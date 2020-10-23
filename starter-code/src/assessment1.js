// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  const isEven = num % 2 === 0;
  return isEven;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach((el) => {
    sum += el;
  });
  return sum;
}

const nums = [1, 2, 3, 4];

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  const sorted = numbers.sort((a, b) => {
    return b - a;
  });
  sorted.slice(0, 1);
  return Number(sorted[0]);
}

// console.log(maxOfArray(nums));

const words = ["hej", "hello", "hello", "hej", "ok"];

// Return the longest string in an array
function longestString(strings) {
  const sortedArr = strings.sort((a, b) => {
    return b.length - a.length;
  });
  const longestString = sortedArr.slice(0, 1);
  return longestString[0];
}

// console.log(longestString(words));

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let bool = false;
  wordsArr.filter((el, i, arr) => {
    bool = arr.includes(word);
  });
  return bool;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
  let unique = "";
  wordsArr.forEach((el, i, arr) => {
    if (unique !== el) {
      unique = el;
    }
  });
  return unique;
}

console.log(findUnique(words));

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  const { firstName, lastName } = personObj;
  return `${firstName} ${lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
