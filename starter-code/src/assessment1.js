// Write a function that returns the product of 2 numbers
function product(x, y) {
   return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) return true
  else return false
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) return a
  else return b
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
 return Math.max(a,b,c)
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length != 0) return [...numbers].reduce((a , b) => a + b)
  else return 0
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers)
}

// Return the longest string in an array
function longestString(strings) {
  let longestStr = ''
  for (let i = 0; i < strings.length; i++){
    if ( longestStr.length < strings[i].length) longestStr = strings[i]
  }
  return longestStr
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.length != 0){
    if (wordsArr.includes(word)) return true
    else return false
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let arrCopy = wordsArr.slice()
  let compareStr = ''
  for (let i = 0; i < wordsArr.length - 1; i++) {
    compareStr = wordsArr[i]
    arrCopy.shift()
    if (!(arrCopy.indexOf(wordsArr[i]) >= 0)) return wordsArr[i]
  }
  return false
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
    let maxNumber = 0
    for (let i = 0; i < matrix.length - 1; i++) {
      maxNumber = Math.max(...matrix[i])
    }
    return maxNumber
}
