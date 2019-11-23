//HELPER FUNCTIONS
function checkIfNumber(x) { // THIS FUNCTION CHECKS IF THE ARGUMENT TYPE IS NUMBER
  if (typeof x === "number") return true;
  else return false;
}

function checkIfArray(x) { // THIS FUNCTION CHECKS IF THE ARGUMENT TYPE IS ARRAY
  if (Array.isArray(x)) return true;
  else return false;
}

// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
};

// Write a function that returns whether a given number is even
function isEven(num) {
  return (num % 2 === 0)
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) return a
  else if (a < b) return b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers !== 0) return numbers.reduce((a, b) => a + b, 0)
  else 0;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(Math, numbers)
  
}

// Return the longest string in an array
function longestString(strings) { 
  let longestString = '';
  for (i = 0; i < strings.length; i++){
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  } 
  return longestString;
};

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return (wordsArr.indexOf(word) > -1);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!checkIfArray(wordsArr) || wordsArr.length === 0) return false; // if array is not
  for (let word of wordsArr) {
    if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
      return word;
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if (
    !(personObj.constructor === Object) ||
    personObj.firstName === undefined ||
    personObj.lastName === undefined
    )
    return false;
  else return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if (!checkIfArray(matrix) || matrix.length === 0) return false;
  let highestNum = 0;
  matrix.forEach(element => {
    element.forEach(number => {
      if (number > highestNum) {
        highestNum = number;
      }
    });
  });
  return highestNum;
  };
