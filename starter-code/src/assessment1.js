// Write a function that returns the product of 2 numbers
function product(x, y) {
  let result = x*y;
  return result;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
  return true;
  } else {
    return false;
  }
  
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if ( a > b && a > c) {
    return a;
  } else if ( b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  var sum = numbers.reduce(function(a,b) {
    return a + b;
  }, 0);
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers.length == 0) {
    return 0;
  }
  return Math.max.apply(null, numbers)
}

// Return the longest string in an array
function longestString(strings) {
  let theLongest;
  for (let i = 0; i < strings.length; i++) {
    if ( theLongest < strings[i]) {
      theLongest = strings.split(strings[i], strings[i+1]);
    } 
  }
  return theLongest;
}



// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)){
    return true;
  } else {
    return false;
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
 /* for (let i=0; i < wordsArr.length; i++) {
    let uniqueWord = wordsArr[0];
    if (uniqueWord == )
  }*/
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let _firstName = personObj.firstName;
  let _seconName = personObj.lastName;
  return _firstName + ' ' + _seconName

}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNumber = matrix.map(function(element) {
    for (let i=0; i < matrix.length; i++) {
      if (matrix[i] > matrix [i+1]){
        largestNumber.push(matrix[i])
      } else if (matrix[i] < matrix [i+1]){
        largestNumber.push(matrix[i+1])
      }
    }
    
  })
}
