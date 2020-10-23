// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (isNaN(x) || isNaN(y)) {
    return false;
  }
  if (x == 0 || y == 0) {
    return 0;
  }
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
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
  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    return false;
  }
  return maxOfTwoNumbers(maxOfTwoNumbers(a, b), c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (typeof numbers != "object") {
    return false;
  }
  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] != "number") {
      return false;
    }
  }
  const sum = numbers.reduce((total, el) => {
    if (!el) {
      total += 0;
    } else {
      total += el;
    }
    return total;
  }, 0);
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length == 0 || typeof numbers != "object") {
    return false;
  }
  const sortedArr = numbers.sort((a, b) => a - b);
  return numbers[numbers.length - 1];
}

// Return the longest string in an array
// array1.forEach(element => console.log(element));
function longestString(strings) {
  if (strings.length == 0 || typeof strings != "object") {
    return false;
  }
  let referNum = 0;
  let referenceI = 0;
  let index = 0;
  strings.forEach((element, index) => {
    if (typeof elem === "string") {
      if (element.length > referNum) {
        referNum = element.length;
        referenceI = index;
      }
    }
  });
  return strings[index];
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (typeof wordsArr != "object") {
    return false;
  }
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (typeof wordsArr != "object") {
    return false;
  }
  if (wordsArr.length == 0) {
    return false;
  }
  let index = 0;
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(wordsArr[i]) == wordsArr.lastIndexOf(wordsArr[i])) {
      index = wordsArr.indexOf(wordsArr[i]);
      break;
    }
  }
  return wordsArr[index];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maximum = 0;
  for (i = 0; i < matrix.length; i++) {
    for (k = 0; k < matrix[i].length; k++) {
      if (matrix[i][k] > maximum) {
        maximum = matrix[i][k];
      }
    }
  }
  return maximum;
}
