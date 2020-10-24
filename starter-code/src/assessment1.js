// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
};

// Write a function that returns whether a given number is even
function isEven(number) {
  return (number % 2) === 0;
};

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a,b);
};

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
};

// Calculate the sum of an array of numbers
let numbers = [
  '2',
  '4',
  '3',
  '1'
]

function sumArray(numbers) {
  return numbers.reduce((a,b) => a+b, 0);
  }

// Return the largest number of a non-empty array
let numArray = [
  '1',
  '77',
  '200'
]
function maxOfArray(numbers) {
  return Math.max.apply(null, numArray);
}

// Return the longest string in an array
let cities = [
  'a',
  'ab',
  'abc'
]
function longestString(strings) {
  return cities.pop();
  
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
 return wordsArr.includes(word)             
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  return wordsArr.find(x => wordsArr.indexOf(x) === wordsArr.lastIndexOf(x));
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
let person = {
  firstName: 'Tony',
  lastName: 'Stark'
};
function getFullName(personObj) {
  return (person.firstName) + " " + (person.lastName)
}


// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return matrix.map((row)=> { return Math.max.apply(Math, row); });
}



