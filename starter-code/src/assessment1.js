// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  let even = (num / 2) === 0; 
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a,b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
}

// Calculate the sum of an array of numbers
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function sumArray(numbers) {
  total = numbers.reduce((numbers), 0)
  
  return total;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
}

// Return the longest string in an array
function longestString(strings) {
  strings.sort()

}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
 return wordsArr.includes(word)
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
let person = {
  firstName: 'Tony',
  lastName: 'Stark'
};
function getFullName(personObj) {
  let fullName = `${personObj.firstName} + ${personObj.lastName}`
  return fullName
}


// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
