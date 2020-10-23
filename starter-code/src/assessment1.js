// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
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
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers.length === 0) {
    return 0
  } else {
  const sum = numbers.reduce( function(total, el) {
    return total + el;
    
  }, 0);
  return sum;
}
}



// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers);
}

// Return the longest string in an array
function longestString(strings) {
  let longestWord = '';
  for (i = 0; i < strings.length; i++) {
    if (longestWord.length < strings[i].length) {
      longestWord = strings[i]
    }
  }
  return longestWord;
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
  if (wordsArr.length === 0) {
    return false;
  }
  let newArr = [];
  for (i = 0; i < wordsArr.length; i++) {
    if (newArr.indexOf(wordsArr[i]) === -1) {
      newArr.push(wordsArr[i]);
      if (newArr.includes(wordsArr[i])) {
        return wordsArr[i];
        break;
      }
    } 
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  const max1 = Math.max(...matrix[0]);
  const max2 = Math.max(...matrix[1]);
  if (max1 > max2) {
    return max1;
  } else {
    return max2;
  }
}



