// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}
// // Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}


// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a >= b && b >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {

  return numbers.reduce((a, b) => {
    return a + b;
  }, 0);
}

// Return the largest number of a non-empty array



// Return the longest string in an array
  
// function longestString(strings) {

//   let longestWord = "";
//   for (i=0; i<array.length; i++){
//   if (array[i].length > longestWord.length) {
//   longestWord = array[i];

//   }
//   }

//   return longestWord;

  

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
  
  return Object.keys.personObj = ['firstName', 'lastName']
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}