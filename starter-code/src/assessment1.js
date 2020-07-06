// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y
}

// Write a function that returns whether a given number is even
function isEven(num) {
  switch (num % 2 === 0) {
    case true:
      return true;
      break;
    case false:
      return false;
      break;
  }

}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c
  }

}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length === 0) {
    return 0
  }
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }

  return sum
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[numbers.length - 1]
}

// Return the longest string in an array
function longestString(strings) {
  function longestString(strings) {
    strings.sort(function (a, b) {
      return a.length - b.length;
    });
  }
  return strings[0]
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  switch (wordsArr.includes(word)) {
    case true:
      return true;
      break;
    case false:
      return false;
      break;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false
  }
  let arr = []
  for (let i = 0; i < wordsArr; i++) {
    if (arr.includes(wordsArr[i]) === true) {
      arr.push(wordsArr[i])
    }
  }

  return arr[0]
  /*wordsArr.find(function(elem){

  })*/
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  matrix.forEach(elem =>
    elem.sort((a, b) => {
      return a - b
    }))
}