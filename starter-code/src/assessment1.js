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
  let sum = 0;
  numbers.forEach(num => {
    sum += num;
  })
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let largestNum = 0;
  numbers.forEach(num => {
    if(num > largestNum) largestNum = num;
  })
  return largestNum;
}

// Return the longest string in an array
function longestString(strings) {
  let longestStr = "";
  strings.forEach(str => {
    if(str.length > longestStr.length) longestStr = str;
  })
  return longestStr;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word); //method "includes" searches array for the input parameter.
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  let word = '';
  let words = [...wordsArr]
  if (wordsArr.length === 0) return false;
  for (let i = 0; i < wordsArr.length; i++){
    word = wordsArr[i];
    words.shift();
    if (!words.includes(word)) return word;
  }

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxNum = 0;
  for(let x = 0; x < matrix.length; x++){
    for(let y = 0; y < matrix.length; y++){
      if(matrix[y][x] > maxNum) maxNum = matrix[y][x];
    }
  }
  return maxNum;
}
