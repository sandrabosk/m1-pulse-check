// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true
  }
  return false
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b)
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c)
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0
  for (i = 0; i < numbers.length; i++) {}
  return sum += numbers[i]
  //
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let largest = numbers[0]
  for (let i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i]
    }
  }
  return largest

  //
}

// Return the longest string in an array
function longestString(strings) {
  let stringsLgth = 0;
  let longest;
  for (let i = 0; i < strings.length; i++) {
    if (strings.length > stringsLgth);
    longest = strings[i]
  }
  return longest

  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let wordExist = wordsArr.indexOf(word)
  for (let i = 0; i < wordsArr.length; i++) {
    if (word === wordExist);
    return true
  }
  return false
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firsName, personObj.lastName
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}