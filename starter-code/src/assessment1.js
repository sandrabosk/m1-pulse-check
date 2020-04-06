// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
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
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++){
    sum += numbers[i];
  }
  return sum;
}
/*también se podría hacer con el método reduce. numbers.reduce(function(acc, cv){
  let sum = acc + cv;
  return sum;
});*/

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let largestNumber = 0;
  for (let i =0; i < numbers.length; i++){
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return largestNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longestStr = "";
  for (let i =0; i < strings.length; i++) {
    if(strings[i].length > longestStr){
      longestStr = strings[i];
    }
  }
  return longestStr;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }

}

// Finding the first non-duplicate (non-repeating) word in an array
/*
function findUnique(wordsArr) {
  wordsArr.forEach(function(word){
    if (word[i].localCompare(word){
      return true;
    } else {
      return false;
    }
  });
}
*/

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
  // personObj.firstName + " " + personObj.lastName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNumber = 0;
  for (let i =0; i < matrix.length; i++){
    for (let j =0; j < matrix[i].length; j++){
      if (matrix[i][j] > largestNumber) {
        largestNumber = matrix[i][j];
    }
   }
  }
  return largestNumber;
}


