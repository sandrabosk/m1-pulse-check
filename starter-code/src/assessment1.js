// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y; //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else if (num % 2 === 1) {
    return false; //
  }
  return num;
}
// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (a < b && b > c) {
    return b;
  } else if (c > b && c > a) {
    return c;
  }
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers === 0) {
    return 0;
  }
  let sumatorio = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumatorio += numbers[i];
  }
  return sumatorio;
  //
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let highNum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (highNum < numbers[i]) {
      highNum = numbers[i];
    }
  }
  return highNum;
  //
}

// Return the longest string in an array
/*function longestString(strings) {
  let maxLetters = 0;
  for (let i = 0; i < strings.length; i++) {
    if (maxLetters < strings[i].length) {
      maxLetters = strings[i].length;
    }
  }
  return maxLetters; //
}*/

// Return whether a word is in an array
/*function doesWordExist(wordsArr, word) {
  let sameWord = wordsArr.filter((word) => {
    if (word == wordsArr) {
      return true;
    } else {
      return false;
    }
  });
  //
}*/

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
