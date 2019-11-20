// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) return true;
  return false
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b)
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {  //4, 5, 99
  if (a > b && a > c) return a;
  if (a < b && b > c) return b;
  else return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let newArr = []
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      newArr.push(numbers[i])
    } 
  }
  return newArr[0]
}


// Return the longest string in an array
function longestString(strings) {

}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) return true;
  else return false
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let uniqueWords = []
  for (let i = 0; i < wordsArr.length; i++) {
    if (!uniqueWords.includes(wordsArr[i])) {
      uniqueWords.push(wordsArr[i])
    }
  }
  return uniqueWords[0]

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
