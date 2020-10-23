// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  }
}

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

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let total = 0;
  numbers.forEach((el) => {
    total += el;
  });
  return total;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  const highestNum = numbers.sort(function (a, b) {
    return b - a;
  });
  //as numbers are sorted, the highest number is going to be placed un index 0
  return highestNum[0];
}

// Return the longest string in an array
function longestString(strings) {
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  // use here a reduce method to create a new string with the number!!
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
