// Write a function that returns the product of 2 numbers
function product(x, y) {
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
  let n = 0;
  if (a > n) n = a;
  if (b > n) n = b;
  if (c > n) n = c;
  return n;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (!numbers) return 0;
  let sumArray = numbers.reduce((sum, element) => {
    return sum += element;
  }, 0);
  return sumArray;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
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
  let longest = "";
  strings.forEach(str => {
    if (str.length > longest.length) longest = str;
  });
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0)
    return false;
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
  return (`${personObj.firstName} ${personObj.lastName}`);
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (!matrix)
    return 0;
  max = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > max) max = matrix[i][j];
    }
  }
  return max;
}
