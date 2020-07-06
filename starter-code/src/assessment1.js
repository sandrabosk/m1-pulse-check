// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true
  } else {
    return false
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b){
    return a
  } else if (a < b) {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a
  } else if (b > a && b > c) {
    return b
  } else if (c > a && c > b) {
    return c
  } else if ((a, b, c) <= 0) {
    return 0
  } else {
    return undefined
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var total =  0;

  for (var i = 0; i < numbers.length; i++) {                  
    if (numbers.length === 0) {
     return 0
    }
    total += Number(numbers[i]);
  }
  return total;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers)
}

// Return the longest string in an array
function longestString(strings) {
  let longest = "";
  for (let i = 0; i < strings.length; i++) {
    if (longest.length < strings[i].length) {
      longest = strings[i];
    }
  }
  return longest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for (var i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      return true
     }
    }
 return false
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false
  }
  
  let result = wordsArr.find(x => wordsArr.indexOf(x) === wordsArr.lastIndexOf(x));
  return result

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
 let fullName = `${personObj.firstName} ${personObj.lastName}`;
 return fullName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}


