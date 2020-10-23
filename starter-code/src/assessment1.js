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
  let largest = a;
  if (b > a) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }
  return largest;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (typeof numbers !== "object") {
    return false;
  } else if (numbers.length == 0) {
    return 0;
  } else if (numbers.includes(typeof "number") == false) {
    return false;
  } else {
    let total = 0;
    numbers.forEach((item) => {
      total += item;
    });
    return total;
  }
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
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
  let largestString = 0;
  strings.forEach((item) => {
    if (item.length > largestString) {
      largestString = item;
    }
  });
  return largestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length == 0) {
    return false;
  } else {
    count = 0;
    for (i = 0; i < wordsArr.length; i++) {
      let word = wordsArr[i];
      wordsArr.forEach((item) => {
        if (item == word) {
          count++;
        }
      });
    }
  }
  if (count == 1) {
    return word;
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
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
