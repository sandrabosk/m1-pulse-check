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
function findUnique(wordsArr) { // THIS IS MY BEST GUESS BUT DIDN'T WORK
  let howOften = [];
  wordsArr.split('').forEach(ch => {
    if (!howOften[ch])
    howOften[ch] = 1;
    else
    howOften[ch]++;
  });
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  // NO IDEA
}
