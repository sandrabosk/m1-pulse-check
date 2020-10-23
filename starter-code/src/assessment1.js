// Write a function that returns the product of 2 numbers


const multiplied = function(x, y) {
 return x * y;
};

console.log(multiplied(3, 4));


// Write a function that returns whether a given number is even
const isNumberEven = function (num) {
  if (num % 2 == 0) {
    return true;
  }
    else {
      return false;
    }
}
  console.log(isNumberEven(1))


// Return the largest of 2 numbers
const maxOfTwoNumbers = function(a, b) {
  return Math.max(a, b);

 //
}

console.log(maxOfTwoNumbers(2,4))


// Return the largest of 3 numbers
const maxOfTwoNumbers2 = function(a, b, c) {
  return Math.max(a, b, c);
}

console.log(maxOfTwoNumbers2(3, 4, 5))

// Calculate the sum of an array of numbers
const numbers = [2,3,4,5,6,7];

const sumArray = numbers.reduce(function (total, el) {

  return total + el;


  //
}, 0)

console.log(sumArray)

// Return the largest number of a non-empty array
const maxOfArray = numbers.reduce(function (total,el) {
  if (total > el) {
    return total
  }
   else {
     return el
   }
  //
},0)

console.log(maxOfArray)


// Return the longest string in an array
const names = ["Julia", "Maria", "Marta", "Xavier", "Carla", "Federico"]
const longestString = names.reduce(function(total, strings) {
   if (total.lenght > strings.lenght ) {
     return total.lenght
   }
   else {
     return strings.lenght
   }
  
  //
},0)

console.log(longestString) //not working

// Return whether a word is in an array
const doesWordExist = (function (wordsArr, word) {

  if ()
  

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
