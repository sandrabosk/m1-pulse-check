// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  let numEven = num % 2 === 0;
  return numEven
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    return a;
  }

}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  // let maxNumber = max.math(a, b, c);
  // return maxNumber;
  if (a > b && c) {
    return a;
  }
  if (b > a && c) {
    return b;
  }
  if (c > a && b) {
    return c;
  }

}

// Calculate the sum of an array of numbers
const arrOfNum = [1, 2, 3, 4, 5];

function sumArray(numbers) {
  
  let sumArrOfNum = numbers.reduce(function(total, currNum){
    return total + currNum;
    
  }, 0);
  return sumArrOfNum;
};

// Return the largest number of a non-empty array
/* function maxOfArray(numbers) {
  if ()
  return math.max(numbers) 

}*/ 

// Return the longest string in an array
function longestString(strings) {
  
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
