// Write a function that returns the product of 2 numbers
function product(x, y) {
  let resultProduct = x * y;
  return resultProduct;
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
  let higherNum = Math.max(a, b);
  return higherNum;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let higherNum = Math.max(a, b, c);
  return higherNum;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  const sumNUmber = numbers.reduce(function (acc, num) {
    let updatedAcc = acc + num;
    return updatedAcc;
  }, 0);
  return sumNUmber;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let higherNum = Math.max(...numbers);
  return higherNum;
}

// Return the longest string in an array
function longestString(strings) {
  let lght = 0;
  let longestWord;
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > lght) {
      lght = strings[i].length;
      longestWord = strings[i];
    } else if (strings[i].length === lght) {
      return longestWord;
    }
  }
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  const existWord = wordsArr.filter(function (word, i) {
    if (wordsArr[i] === word) {
      return true;
    } else {
      return false;
    }
  });
}

// doesWordExist can do with indexOf()

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
