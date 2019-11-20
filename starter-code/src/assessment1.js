// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0){
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
  if (a > b && a > c){
    return a;
  } else if (b > a && b > c){
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++)
  sum += numbers[i];
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  // 
}

// Return the longest string in an array
function longestString(strings) {
  let longest = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] > longest);
    longest = array[i]
  }
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  array.includes("wordsArr")
  return true;
}
doesWordExist(); // doesWordExist() worked on repl.it but not sure why it did not work on this test

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(firstName, lastName) {
  let person = {
    firstName: 'Tony',
    lastName: 'Stark'
  };
  return `${person.firstName} + ${person.lastName}`;
}
getFullName(); // getFullName() worked on repl.it but not sure why it did not work on this test


// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
