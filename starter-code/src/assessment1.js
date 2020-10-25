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
  return Math.max(a,b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) { 
  let sumNumbers = 0;

  numbers.forEach(function(num){
    return sumNumbers += num;

  })
return sumNumbers;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
   return Math.max(...numbers);
}

// Return the longest string in an array
function longestString(strings) {  //struggled
  let longWord = strings [0];

  strings.forEach(function(word){
    if (word.lenght > longWord.lenght){
      longWord = word
    }
  })
  return longWord
  //
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
 // let uniqueWords = wordsArr [0]

 // wordsArr.filter(function(words){
     // words.indexOf(wordsArr);


  //}
   // return uniqueWords;  
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNumber = matrix [0] [0]
  // ???
}
