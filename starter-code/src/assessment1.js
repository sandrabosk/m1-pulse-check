// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;

}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) {
    return true
  } else
    return false
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else {
    return a
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  var largest = 0;
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b
  } else {
    return c
  }
}


// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers.length) {
      return numbers[i]
    }
  }
}

// Return the longest string in an array
function longestString(strings) {

  for (i = 0; i < strings.length; i++) {
    if (strings[i].length > strings.length) {
      return strings[i]
    }
  }

}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] == word) {
      return true
    } else
      return false
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}

function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}