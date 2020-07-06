// Write a function that returns the product of 2 numbers
function product(x, y) {
 
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num % 2 == 0){
    return true;
  }else return false
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for(var i = 0; i<numbers.length;i++){
    sum += numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(Math ,numbers);
}

// Return the longest string in an array
function longestString(strings) {
  let longest = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }
  return longest;
}
    
  

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
    var find = wordsArr.includes(word)
    return find;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if(wordsArr.length === 0){
    return false;
  }else{
    const nduplicate = wordsArr.find(word =>wordsArr.indexOf(word) === wordsArr.lastIndexOf(word))
      return nduplicate;
    }
  }
// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {

}
