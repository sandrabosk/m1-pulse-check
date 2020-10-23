// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (isNaN(x) || isNaN(y) || x === null || y === null) return false;
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (isNaN(num) || num === null) return false;
  return !(num % 2);
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (isNaN(a) || isNaN(b) || a === null || b === null) return false;
  return a > b ? a : b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (
    isNaN(a) ||
    isNaN(b) ||
    isNaN(c) ||
    a === null ||
    b === null ||
    c === null
  )
    return false;
  return a > b ? (a > c ? a : c) : b > c ? b : c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (!numbers || numbers.length === 0) return 0;
  if (!Array.isArray(numbers)) return false;
  let onlyNum = true;
  let total = numbers.reduce(function (tot, num) {
    if (isNaN(num) || num === null) onlyNum = false;
    return tot + num;
  }, 0);
  if (!onlyNum) return false;
  return total;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (!numbers || numbers.length === 0 || !Array.isArray(numbers)) return false;
  let max = numbers.reduce(function (max, num) {
    return num > max ? num : max;
  }, 0);
  return max;
}

// Return the longest string in an array
function longestString(strings) {
  if (!strings || strings.length === 0 || !Array.isArray(strings)) return false;
  let longest = "";
  strings.forEach(function (str) {
    if (str && str.length > longest.length) {
      longest = str;
    }
  });
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (!wordsArr || wordsArr.length === 0 || !Array.isArray(wordsArr))
    return false;
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!wordsArr || wordsArr.length === 0) return false;
  if (!Array.isArray(wordsArr)) return false;
  for (i = 0; i < wordsArr.length; i++) {
    if (i + 1 === wordsArr.length) return wordsArr[i];
    for (j = i + 1; j < wordsArr.length; j++) {
      if (wordsArr[i] === wordsArr[j]) break;
      if (j + 1 === wordsArr.length) return wordsArr[i];
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (typeof personObj != `object`) return false;
  if (personObj.firstName === undefined || personObj.lastName === undefined)
    return false;
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (!matrix || matrix.length === 0 || !Array.isArray(matrix)) return false;
  let max = matrix.reduce(function (max, dim1) {
    let max2 = maxOfArray(dim1);
    return max2 > max ? max2 : max;
  }, 0);
  return max;
}
