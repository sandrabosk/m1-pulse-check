// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}
console.log(product(4, 7));


// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
console.log(isEven(5));


// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}
console.log(maxOfTwoNumbers(-1, -3));


// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
}
console.log(maxOfThreeNumbers(-2, -4, -1));


// Calculate the sum of an array of numbers
function sumArray(numbers) {
  const total = numbers.reduce((acc, curr) =>
    acc + curr, 0)
  return total;
};
const randomNumbers = [3, 4, 6, 9, 46, -10];
console.log(sumArray(randomNumbers));


// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers)
};
console.log(maxOfArray(randomNumbers));


// Return the longest string in an array
function longestString(strings) {

};
const randomText = ["This", "is", "one", "big", "string"];
console.log(longestString(randomText));


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}