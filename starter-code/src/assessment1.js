// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 == 0)
  return true;
else
  return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b )
  return a;
else
  return b;
}


// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(a > b && a>c)
				{
					return a;
				}
				else if(b > a && b >c)
				{
					return b;
				}
				else if(c > a && c > b)
				{
					return c;
				}
}

// Calculate the sum of an array of numbers
/*var numbers = [1, 2, 3, 4, 5];
function sumArray(numbers) {
  

     var sum = numbers. reduce(function(a, b){
      return a + b;
      }, 0);
}*/


// Return the largest number of a non-empty array
function maxOfArray(numbers) {
    var max = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      } 
    }
    return max;
  }
  
 

// Return the longest string in an array
function longestString(strings) {
  var max;
  var cLength =0;
    for (let i = 0; i < strings.length; i++) {
      if (strings[i].length > cLength) {
        max = strings[i];
      } 
    }
    return max;
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
/*const obj = {
  firstName: 'Tony', 
  lastName: 'Stark',

    function getFullName (obj) {
    return `${this.firstName} ${this.lastName}`;
}
}*/

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
