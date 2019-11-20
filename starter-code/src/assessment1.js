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
  return Math.max(a,b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let total = 0;
  for(let num in numbers){
    total += numbers[num];
  }
  return total;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let largestNum = 0;
  for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > largestNum){
      largestNum = numbers[i];
    }
  }
  return largestNum;
}
maxOfArray(numbers);

// Return the longest string in an array
function longestString(strings) {
  let longestStr = "";
  for(let i = 0; i < strings.length; i++){
    if(strings[i].length > longestStr.length){
      longestStr = strings[i];
    }
  }
  return longestStr;
}
longestString(strings);

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  for(let w in wordsArr){
    if(wordsArr.includes(word)){
      return true;
    } else {
      return false;
    }
  }
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
    for (let i = 0; i < wordsArr.length; i++) {
      let word = wordsArr[i];
      if (wordsArr.indexOf(word) == i && wordsArr.indexOf(word, i + 1) == -1) {
        return word;
      }
    }
    return false;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNumber = 0;
  for(let r = 0; r < matrix.length; r++){
    for(let c = 0; c < matrix.length; c++){
      if(matrix[r][c] > largestNumber){
        largestNumber = matrix[r][c];
      }
    }
  }
  return largestNumber;
}
