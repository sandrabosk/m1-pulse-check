// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  const suma = numbers.reduce(function (acc, number) {
    return acc + number
  }, 0)
  return suma
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let max = Math.max(...numbers);
  return max
}

// Return the longest string in an array
function longestString(strings) {
  var max = strings[0].length;
  strings.map(word => max = Math.max(max, word.length));
  result = strings.filter(word => word.length == max);
  return result;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr === []) {
    return false;
  } else {
    const result = wordsArr.find(word => wordsArr.indexOf(word) === wordsArr.lastIndexOf(word));
    return result;
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  const maxRow = matrix.map(function (row) {
    return Math.max.apply(Math, row);
  });
  let max = Math.max.apply(null, maxRow);
  return max;
}