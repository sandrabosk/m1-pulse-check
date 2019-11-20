// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  //
  if (num % 2 === 0) return true;
  else return false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //
  return Math.max(a, b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  const sum = numbers.reduce((acc, val) => {
    return acc + val;
  }, 0);
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
  let arr = [...numbers];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Return the longest string in an array
function longestString(strings) {
  //
  let arr = [...strings];
  let longestWord;
  for (let i = 0; i < arr.length; i++) {
    longestWord = arr[0];
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
let arr = ['foo', 'bar', 'foo', 'baz', 'bar', 'fizz', 'foo'];
function findUnique(wordsArr) {
  //

  let uniqArr = [];
  for (let i = 0; i < wordsArr.length; i++) {
    let newArr = [...uniqArr];
    newArr.splice(i, 1);
    if (!newArr.includes(wordsArr[i])) {
      uniqArr.push(wordsArr[i]);
    }
  }
  return uniqArr[0] || false;
}
console.log(findUnique(arr));

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
  let max = 0;
  for (let i = 0; i < matrix.length; i++) {
    let max1 = Math.max(matrix[i]);

    let maxArr = [];
    if (max1 > max) {
      maxArr.push(max1);
    } else {
      maxArr.push(max);
    }
    max = Math.max(maxArr);
  }
  return max;
}
