// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a < b) {
    return b;
  } else return a;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  numArray = [a, b, c];
  numArray.sort(function (x, y) {
    return x - y;
  });

  return numArray[numArray.length - 1];
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = numbers.reduce(function (acc, num) {
    return acc + num;
  }, 0);
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[numbers.length - 1];
}

// Return the longest string in an array

function longestString(strings) {
  strings.sort(function (a, b) {
    return a - b;
  });

  strings.sort(function (a, b) {
    if (a.length > b.length) {
      return -1;
    }

    if (a.length < b.length) {
      return 1;
    }

    return 0;
  });
  return strings[0];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
  foundUnique = true;
  let uniqueArray = [];

  for (let i = 0; i < wordsArr.length; i++) {
    if (!uniqueArray.includes(wordsArr[i]) && foundUnique) {
      uniqueArray.push(wordsArr[i]);
    } else {
      if (uniqueArray.includes(wordsArr[i])) {
        foundUnique = false;
      } else {
        return wordsArr[i];
      }
    }
  }
  return result;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let resultsArray = matrix.map(function (array) {
    return maxOfArray(array);
  });

  return maxOfArray(resultsArray);
}
