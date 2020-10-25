// Write a function that returns the product of 2 numbers
function product(x, y) {
  let numsMultiplied = x * y;
  return numsMultiplied
};

// Write a function that returns whether a given number is even
function isEven(num) {
  const isEven = (num % 2) === 0;
  return isEven;
};

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  const maxNum = Math.max(a, b);
  return maxNum;
};

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  const maxNum = Math.max(a, b, c);
  return maxNum;
};

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length > 0) {
    const sumElements = numbers.reduce(function (total, el) {
      return total + el;
    });
    return sumElements;
  } else {
    return 0;
  };
};

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxArrEl = 0;
  for (i=0; i < numbers.length; i++) {
    if (i < numbers.length - 1) {
      if (maxArrEl < numbers[i]) {
        maxArrEl = numbers[i];
      }; 
    };
  };
  return maxArrEl;
};


// Return the longest string in an array

function longestString(strings) {
  let longestStr = '';
   for (i=0; i < strings.length; i++) {
    if (i < strings.length - 1) {
      if (longestStr.length < strings[i].length) {
        longestStr = strings[i];
      }; 
    };
  };
  return longestStr;
};


// Return whether a word is in an array
function doesWordExist(wordArr, word) {
  let wordExists = wordArr.includes(word);
  return wordExists;
};

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length > 0) {
  let uniqueArr = [];
  for (i=0; i<wordsArr.length; i++) {
    let checkWord = wordsArr.pop(i);
    if (wordsArr.includes(checkWord)) {
      let duplicateIndex = wordsArr.indexOf(checkWord);
      wordsArr.splice(duplicateIndex, 1);
    } else {
      uniqueArr.unshift(checkWord);
    };
  };
    return uniqueArr[0];
  } else {
    return false
  };
};

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  const {firstName, lastName} = personObj;
  return firstName + " " + lastName;
};

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxOfEachArr = [];
  for (i=0; i<matrix.length; i++) {
    let maxInnerArr = Math.max(...matrix[i]);
    maxOfEachArr.push(maxInnerArr);
  };
  let maxMatrix = Math.max(...maxOfEachArr);
  return maxMatrix;
};