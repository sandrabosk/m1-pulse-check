// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } if (a < b) {
    return b;
  } if (a === b) {
    return "a=b"
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } if (b > a && b > c) {
    return b;
  } if (c > a && c > b) {
    return c;
  } if (a === b && a === c) {
    return "a=b=c";
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  var largest = numbers[0];
  for (var i = 0; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
  return largest;
}

// Return the longest string in an array
function longestString(strings) {
  let longestStr = "";
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestStr.length) {
      longestStr = strings[i];
    }
  }
  return longestStr;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  var n = wordsArr.includes(word, wordsArr);
  return n;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) return false;
  for (var m = 0; m < wordsArr.length; m++) {
    if (wordsArr.indexOf(wordsArr[m]) === wordsArr.lastIndexOf(wordsArr[m])) {
      return wordsArr[m];
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  var largest = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > largest) {
        largest = matrix[i][j];
      }
    }
  }

  return largest;

}
