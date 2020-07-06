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
  if (a > b){
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let value = 0;
  if (a > b && a > c){
    value = a;
  } else if (b > a && b > c) {
    value = b;
  } else {
    value = c;
  }
  return value;
}

// Calculate the sum of an array of numbers
let sum = 0
function sumArray(numbers) {
  for (i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
let largestNumber = 0
function maxOfArray(numbers) {
  for (i = 0; i < numbers.length; i++){
    if (largest > numbers);
  }
  return largest;
}

// Return the longest string in an array
let longString = ""
function longestString(strings) {
  for (i = 0; i < strings.length; i++){
    if (strings[i].length > longestString.length){
      longString = longestString[i];
    }
  }
  return longString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (i = 0; i < wordsArr.length; i++){
    if(wordsArr.indexOf(word) !== -1){
      return "Word exists";
    } else {
      return "The word does not exist";
    }
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
//function findUnique(wordsArr) {
//  for (i = 0; i < wordsArr.length; i++){
//    var theWord = wordsArr.chartAt(i);
//    if (wordsArr.indexOf(theWord) == 1 && wordsArr.indexOf(theWord, i + 1) == -1) {
//      return theWord;
//    }
//  }
//  return null;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  
}
