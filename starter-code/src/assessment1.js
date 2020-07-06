// Write a function that returns the product of 2 numbers
function product(x, y) {
  if(typeof(x) !== 'number' || typeof(y) !== 'number'){
    return false
  }
  return x*y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if(num%2 === 0) {
    return true
  } else{
    return false
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a > b){
    return a
  } else if(b > a){
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(typeof(a) !== 'number' || typeof(b) !== 'number' || typeof(c) !== 'number'){
    return false
  }

  if(a > b && a > c){
    return a
  } else if( b > a && b > c){
    return b
  } else if( c > a && c > b){
    return c
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {

  if(!Array.isArray(numbers)){
    return false
  }

  let checkNumbers = true;
  numbers.map(number => {
    if(typeof(number) !== 'number'){
      checkNumbers =  false
    }
  })

  if(!checkNumbers){
    return false
  } else{
    if(numbers.length === 0){
      return 0
    } else {
      return numbers.reduce( (acc, i) => acc + i)
    }
  }
  
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if(numbers.length === 0 || !Array.isArray(numbers)){
    return false
  }
  return Math.max(...numbers)
}

// Return the longest string in an array
function longestString(strings) {
  if(strings.length === 0 || !Array.isArray(strings)){
    return false
  }

  let largerString = "";
  strings.map(string => {
    if(typeof(string) === 'string'){
      if(string.length > largerString.length){
        largerString = string;
      }
    }
  })
  return largerString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(!Array.isArray(wordsArr)){
    return false
  }
  if(wordsArr.includes(word)){
    return true
  } else {
    return false
  }
}


// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0 || !Array.isArray(wordsArr)) {
    return false;
  }

  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr.indexOf(wordsArr[i], i + 1) === -1) {
      return wordsArr[i];
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  if(typeof(personObj) !== 'object'){
    return false
  }

  if('firstNAme' in personObj === false || 'lastName' in personObj === false){
    return false
  }

  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNumber = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largestNumber) {
        largestNumber = matrix[i][j];
      }
    }
  }
  return largestNumber;
}
