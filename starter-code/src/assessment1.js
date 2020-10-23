// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 === 0)
  {
    return true;
  }
  else{
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if ( a > b ) {
    return a;
  }
  else
  {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c)
  {
    return a;
  }
  else if (b > a && b > c)
  {
    return b;
  }
  else{
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  const sumNumbers = numbers.reduce(function(total, num){
    return  total + num; 
    }, 0)
  return sumNumbers;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  const maxNumber = numbers.filter(function(num){
    var max = 0;
    if (num > max){
      max = num;
    }
    return max;
  });
  return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  const maxString = strings.filter(function(string){
    //filter condition
    const max = 0;
    string.length > max; //
  });
  return maxString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word){
// if word exists then arr.indexOf(word)!== 0




// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
/* function getFullName(personObj) {

const fullName = `${personObj.firstNAme} ${personObj.lastName}`;
return fullName;
} */

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
//}
