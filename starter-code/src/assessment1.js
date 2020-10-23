// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  let isEven;
  if (num % 2 === 0){
    isEven = true;
  } else {
    isEven = false;
  }
  return isEven;
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers === [] || !numbers){
    return 0;
  }
  const updatedTotal = numbers.reduce (function (total, el) { 
  // why is total NaN as soon as we add the second el ???
    total+= el; 
    return total;
  }, 0);
  return updatedTotal;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers === [] || !numbers){
    return 0;
  }
  const maxNumber = numbers.reduce ((total, el)=> {
    if (total < el){
      total = el;
    }
    return total;
  }, 0);
  return maxNumber;
  //
}

// Return the longest string in an array
function longestString(strings) {
  if (strings === [] || !strings){
    return 0;
  }
  const longestStr = strings.reduce ((total, el)=> {
    if (total < el.length){
      total = el.length;
    }
    return el;
  }, 0);
  return longestStr;
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
