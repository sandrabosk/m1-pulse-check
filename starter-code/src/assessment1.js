// Write a function that returns the product of 2 numbers
function product(x, y) {
  return (x * y)
}

(product(2,4))
// Write a function that returns whether a given number is even
function isEven(num) {

    if (num % 2 == 0) {
      return true
    } else {
      return false
    }

  }

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if(a>b){
    return `El número más grande es ${a}`
  } else if (a<b){
    return `El número más grande es${b}`
  } 
}

maxOfTwoNumbers(5,7)

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(a>b){
    return `El número más grande es ${a}`
  } else if (a<b){
    return `El número más grande es ${b}`
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var suma= 0;
  for (var i = 0; i <= numbers.length; i++) {
    suma += numbers[i];
  } var resultado = sumArray(numbers)
  return suma;
}


var numbers = [1, 2, 3, 4, 5];
sumArray(numbers)
console.log(resultado)

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
    return Math.max.apply(null, numArray);
  }
var array = [2, 3, 4, 5]
maxOfArray()
// Return the longest string in an array
function longestString(strings) {
  //
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
