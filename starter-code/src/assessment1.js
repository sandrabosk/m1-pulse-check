// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  //
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  // should return a higher number from 2 provided numbers
  //should return a number closer to 0 when both argument numbers are lower than 0
  return Math.max(a, b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //should return the sum of all numbers in the array.
  //should return 0 when first argument is an empty array.
  return numbers.reduce((total, curr) => total + curr, 0);
}
// on arrow functions:
// case 1) one line, NO curly brackets, NO return | case 2) return, curly, usually several lines

/* syntax break-down for reduce: 
arr.reduce(callback( accumulator, currentValue ), initialValue)
arr.reduce( function (acc, curr) { return acc+curr; }, 0)
arr.reduce( (acc, curry) => {
    return acc + curr;
  }, 0)
arr.reduce ( callbackFn, initialValue)
 */

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
  return Math.max(...numbers); // tadaaaa
}

// Return the longest string in an array
function longestString(strings) {
  //
  //let strLengths = strings.map(strings.length) // vois antaa myös indeksin
  //return Math.max(...strLengths) palauttaa nyt numeron..
  //let maxLen = Math.max(...strLengths)
  let longest = 0;
  strings.forEach((element) => {
    if (element.length > longest) {
      longest = element;
    }
  });
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  if (wordsArr.includes(word) === true) {
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let uniques = [];
  wordsArr.forEach((word) => {
    if (!uniques.includes(word)) {
      uniques.push(word);
    }
    if (uniques.includes(word)) {
      uniques.splice(word); // still trying to figure this out :(
    }
  });
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
