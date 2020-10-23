// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  } else {
    return x * y;
  }
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 == 0;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else return b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return false;
  } else {
    let largest = a;
    if (b > a) {
      largest = b;
    }
    if (c > largest) {
      largest = c;
    }
    return largest;
  }
}

// Calculate the sum of an array of numbers

function sumArray(numbers) {
  let result = 0;

  if (Array.isArray(numbers) == false) {
    return false;
  }

  if (numbers.every((item) => typeof item === "number")) {
    numbers.forEach((item) => {
      result += item;
    });
    return result;
  }
  return false;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length == 0 || typeof numbers !== "object") {
    return false;
  }

  let largestNumber = 0;
  numbers.forEach((item) => {
    if (item > largestNumber) {
      largestNumber = item;
    }
  });
  return largestNumber;
}

// Return the longest string in an array
function longestString(strings) {
  if (Array.isArray(strings) == false || strings.length == 0) {
    return false;
  }

  let largestStringlength = 0;

  let cleanedStrings = strings.filter((item) => typeof item == "string");

  cleanedStrings.forEach((item) => {
    if (item.length > largestStringlength) {
      largestStringlength = item.length;
      largestString = item;
    }
  });
  return largestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (Array.isArray(wordsArr) == false) {
    return false;
  }

  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (Array.isArray(wordsArr) == false || wordsArr.length === 0) {
    return false;
  }
  countArray = [];

  for (let i = 0; i < wordsArr.length; i++) {
    let count = 0;
    wordsArr.forEach((item) => {
      if (item == wordsArr[i]) {
        count++;
      }
    });
    countArray.push(count);
  }

  const neededIndex = countArray.indexOf(1);
  return wordsArr[neededIndex];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (Array.isArray(personObj)) {
    return false;
  }

  if (personObj.firstName == undefined || personObj.lastName == undefined) {
    return false;
  }

  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (Array.isArray(matrix) == false || matrix.length == 0) {
    return false;
  }

  let largest = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largest) {
        largest = matrix[i][j];
      }
    }
  }
  return largest;
}
