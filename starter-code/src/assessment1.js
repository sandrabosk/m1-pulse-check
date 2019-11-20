// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  } else if (numbers.length === 1) {
    return numbers[0]
  } else {
    for (i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
  }
  return total;
}


// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max.apply(null, numbers)
  //Would like a little more explination on the .apply method. Only 80% clear to me.
}

// Return the longest string in an array

function longestString(strings) {
  let long1 = ""; //this is our longest string
  for (i = 0; i < strings.length; i++) {
    //if the string[i] if longer than the longest strings length
    if (strings[i].length > long1.length) {
      //then the longest string is that string[i]
      long1 = strings[i];
    }
  }
  //this stops the loop if true
  return long1;
}


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }

}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //MISSING
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}