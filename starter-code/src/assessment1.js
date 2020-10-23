// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
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
  var total = 0;
  for (i = 0; i < numbers.length; ++i) {
    total += numbers[i]; // add each element to the array
  }
  return total;
}

// Return the largest number of a non-empty array
// numbers = [1,2,3,4]
function maxOfArray(numbers) {
  var max = arr.reduce(function (a, b) {
    result = Math.max(a, b);
  });
  return max;
}
// Return the longest string in an array
function longestString(strings) {
  var longestString = 0;
  function longestString(strings) {
    for (i = 0; i < arr.length; i++) {
      if (strings[i].length > longestString) {
        longestString = strings[i].length;
      }
    }
    return longestString;
  }
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes("word")) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
