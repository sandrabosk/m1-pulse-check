// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (isNaN(x) || isNaN(y)) return false;
  return (x * y);
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) return true;
  else return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) return a;
  else return b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (isNaN(a) || isNaN(b) || isNaN(c)) return false;
  let n = 0;
  if (a > n) n = a;
  if (b > n) n = b;
  if (c > n) n = c;
  return n;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (!numbers) return 0;
  if (!Array.isArray(numbers)) return false;
  for (let i = 0; i < numbers.length - 1; i++) {
    if (isNaN(numbers[i])) return false;
  }
  let sumArray = numbers.reduce((sum, element) => {
    return sum += element;
  }, 0);
  return sumArray;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (!numbers) return 0;
  if (numbers.length === 0) return false;
  if (!Array.isArray(numbers)) return false;
  if (!numbers) return 0;
  let highest = -Infinity;
  numbers.forEach(num => {
    if (num > highest) highest = num;
  });
  return highest;
}

// Return the longest string in an array
function longestString(strings) {
  if (!strings) return 0;
  if (strings.length === 0) return false;
  if (!Array.isArray(strings)) return false;
  let longest = "";
  strings.forEach(str => {
    if (typeof (str) === "string" && str.length > longest.length) longest = str;
  });
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (!wordsArr) return 0;
  if (wordsArr.length === 0) return false;
  if (!Array.isArray(wordsArr)) return false;
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!wordsArr) return 0;
  if (wordsArr.length === 0) return false;
  if (!Array.isArray(wordsArr)) return false;
  let doublesArr = [];
  wordsArr.forEach((word, index) => {
    if (wordsArr.indexOf(word) != index)
      doublesArr.push(word);
  });
  let noDoublesArr = wordsArr.filter(word => {
    return (!(doublesArr.includes(word)));
  });

  return noDoublesArr[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof (personObj) != "object") return false;
  if (!personObj.firstName || !personObj.lastName) return false;
  return (`${personObj.firstName} ${personObj.lastName}`);
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (!matrix) return 0;
  if (matrix.length === 0) return false;
  if (!Array.isArray(matrix)) return false;

  max = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) max = matrix[i][j];
    }
  }
  return max;
}
