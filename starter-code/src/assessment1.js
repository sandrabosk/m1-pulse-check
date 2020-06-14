// Write a function that returns the product of 2 numbers
function product(x, y) {
  let z = x*y;
  return z;
}
product(2, 3);

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 === 0){
    return true;
  } else {
    return false;
  }
}

isEven(4);

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a;
  } else if (b > a || b===a){
    return b;
  }
}

maxOfTwoNumbers(5, 8);

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c){
    return a;
  } else if (b > a && b > c){
    return b;
  } else if (c > a && c > b){
    return c;
  } else {
    return c;
  }
}

maxOfThreeNumbers(6, 25, 3);

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let total = 0;
  for(let i=0; i<numbers.length; i++){
    total += numbers[i];
  } return total;
}

// Return the largest number of a non-empty array
function maxOfArray (arr) {
    
  let largest = arr[0] || null;

  let number = null;
  for (var i = 0; i < arr.length; i++) {
      number = arr[i];
      largest = Math.max(largest, number);
  }
  return largest;
}


// Return the longest string in an array
function longestString(strings) {
  let word = "";
  for (let i = 0; i < strings.length; i++) {
    if (word.length < strings[i].length) {
      word = strings[i];
      return word;
    } else if (strings.length === 0){ 
      return null;
    }
  } 
}
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
 longestString(words);
 

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)){
    return true;
  } else {
    return false;
  }
}


// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let uniqueWord = "";
  if(wordsArr.length === 0) return false;
  for(let i = 0; i < wordsArr.length; i++){
    if (i === wordsArr.indexOf(wordsArr[i]) && i === wordsArr.lastIndexOf(wordsArr[i])){
      uniqueWord = wordsArr[i];
      return uniqueWord;
      break;
    } 
  }
}

  

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

getFullName();

// Return the largest number in a two dimensional array
