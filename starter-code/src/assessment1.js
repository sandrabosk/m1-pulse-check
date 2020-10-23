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
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (!numbers) {
    return 0;
  }
  let sum = numbers.reduce((total, currentIndex) => {
    return total + currentIndex;
  }, 0);
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers);
}

// Return the longest string in an array
function longestString(strings) {
  let numArray = strings.map((word) => {
    return word.length;
  });
  let biggestNum = Math.max(...numArray);
  let indexOfLongestWord = numArray.indexOf(biggestNum);
  return strings[indexOfLongestWord];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let doesExist = wordsArr.some((item) => {
    return item === word;
  });
  return doesExist;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
  let uniqueWords = wordsArr.filter((word, index) => {
    return wordsArr.indexOf(word, index + 1) === -1;
  });
  return uniqueWords[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (personObj.firstName && personObj.lastName) {
    return `${personObj.firstName} ${personObj.lastName}`;
  }
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxNumbers = matrix.map((arr) => {
    return Math.max(...arr);
  });

  return Math.max(...maxNumbers);
}
