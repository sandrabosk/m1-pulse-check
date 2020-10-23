// Write a function that returns the product of 2 numbers
function product(x, y) {
  let product = x * y;
  return product;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
//function sumArray(numbers) {
//const sum=sumArrray.reduce(total,number) =>{
//  total+number,0);});
//}

//}

// Return the largest number of a non-empty array
//function maxOfArray(numbers) {
//var Total = numbers.reduce(function(prev, cur) {
// return prev + cur;
//}, 0);
//return TotalmaxOfArray;
//}

// Return the longest string in an array
function longestString(strings) {
  var longestWord = strings.split(" ").sort(function (a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
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
