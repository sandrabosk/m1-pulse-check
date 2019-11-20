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
};

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let finalSum = numbers.reduce(function (acc, curValue) {
    return acc + curValue;
  }, 0);
  return finalSum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (!numbers === false) {
    return Math.max(...numbers);
  } 
}

// Return the longest string in an array
function longestString(stringsArr) {
  let longestStringWithinArray;
  for (let i = 1; i < stringsArr.length; i++) {
    if (stringsArr[i].length > stringsArr[i - 1].length) {
      longestStringWithinArray = stringsArr[i];
      return longestStringWithinArray;
    } else if (stringsArr[i].length === stringsArr[i - 1].length) {
      longestStringWithinArray = stringsArr[i - 1];
      return longestStringWithinArray;
    };
  };
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word) === true) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  } else {
    let nonRepeatedWord;
    for (let i = 0; i < wordsArr.length; i++) {
      nonRepeatedWord = wordsArr.find(i => wordsArr.indexOf(i) === wordsArr.lastIndexOf(i));
      return nonRepeatedWord;
    };
  };
};

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let newArr = for (let i = 0; i < matrix.length; i++) {
  matrix.map(function (i) {
    Math.max(matrix[i]);
    }
  };
}