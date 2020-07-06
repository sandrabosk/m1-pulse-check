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
  } else if (c > a && c > b) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length <= 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  
  let array = 0;
  for (let i = 0; i < numbers.length; i++) {
    return Math.max(numbers[i].length);
  }
}

// Return the longest string in an array
function longestString(strings) {
  let longestWord = "";
  if (strings.length <= 0) {
    return null;
  } else {
    return words[strings];
  }
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.length <= 0) {
    return null;
  } else if (wordsArr.includes(word) === true) {
    return true;
  } else if (wordsArr.includes(word) === false) {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  // if (wordsArr.length === 0) {
  //     return null;
  //   }
  //   let uniqueWords = [...wordsArr];
  //   let counter = 0;
  //   for (let i = 0, i< wordsArr.length; i++) {
  //     if (wordsArr.indexOf(wordsArr[i], i + 1) !== -1) {
  //       console.log (wordsArr.indexOf(wordsArr[i], i + 1) + counter);
  //       uniqueWords.splice(array.indexOf(wordsArr[i], i + 1) + counter,1);
  //       counter--;
  //     }
  //  return uniqueWords;
  // }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}!`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {}
