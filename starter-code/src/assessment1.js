// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
    return num % 2 == 0;
 }
 
 function isOdd(num) {
    return num % 2 == 1;
 }

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = 0;
  let total = numbers.reduce(
    (sum, currentValue) => sum + currentValue, 0
  );
  return total
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(null, numbers);
}

// Return the longest string in an array
function longestString(strings) {
  strings.Max(x => x.Length);
}

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
