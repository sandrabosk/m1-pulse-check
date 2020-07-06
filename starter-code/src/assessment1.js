// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0 ? true : false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  maxNumber = 0;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i + 1] > numbers[i]) {
      maxNumber = numbers[i + 1];
    }
  }
  return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  var maxString = '';
  for (var i = 0; i < strings.length; i++) {
    if (maxString.length < strings[i].length) {
      maxString = strings[i];
    }
  }
  return maxString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.indexOf(word) > -1 ? true : false;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0 || !Array.isArray(wordsArr)) {
    return false;
  }
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(wordsArr[i], i + 1) === -1) {
      return wordsArr[i];
    }
  }
}


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var maxEachArray = matrix.map(function (row) {
    return Math.max.apply(Math, row);
  });

  let maxNumber;

  for (var i = 0; i < maxEachArray.length; i++) {
    if (maxEachArray[i] > maxEachArray[i + 1]) {
      maxNumber = maxEachArray[i];
    }
  }
  return maxNumber;
}