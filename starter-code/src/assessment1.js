// Write a function that returns the product of 2 numbers
function product(x, y) {
  return (x * y);
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return (num % 2 == 0) ;
    
  }
  //


// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {

  return Math.max(a,b);
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {

  return Math.max(a,b,c);
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
 
  //
}

// Return the largest number of a non-empty array
  function maxOfArray(numbers) {
    let largestNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (largestNumber < numbers[i]) {
        largestNumber = numbers[i];
      }
    }
    return largestNumber;
    //
  }
  //


// Return the longest string in an array
function longestString(strings) {
  
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
