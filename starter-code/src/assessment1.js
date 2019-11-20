// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

console.log(9 % 2)

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 == 0) return true
    else return false
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a>b) return a
    else return b
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a>b && a>c) return a
   else if (b>a && b>c) return b 
    else return c
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let numSum = 0;
  numbers.forEach((num) =>{
    numSum += num
  })
return numSum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let numHi = 0;
  numbers.forEach((num, i) =>{
    if (num > (numbers[i+1]) && num > (numbers[i-1])) {
      numHi = num;
    }
  })
  return numHi
}

// Return the longest string in an array
function longestString(strings) {
  let strL = 0;
  strings.forEach((str, i) =>{
    if ((strL.length < str.length) || (i == 0)) {
      strL = str;
    }
  })
  return strL
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) return true
  else return false;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) { //this doesnt really work
  let wordsArr2 = [];
  let uWord = "";
  wordsArr2 = wordsArr;
  wordsArr.forEach((str, i) =>{
    if (wordsArr2.includes(str)) wordsArr2.splice(i, 1)
      wordsArr.forEach((str2, i2) =>{
        if (wordsArr2.includes(str2)) uWord = str2;
  })
  })
  return uWord;
}


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let firstN = personObj.firstName;
  let lastN = personObj.lastName;
  return firstN + " " + lastN;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let numHi = [];
  let innerA = 0;
  matrix.forEach((num, i) =>{
    matrix[i].forEach((num2, i2) =>{
      if (num2 > (matrix[i][i2+1])) {
        numHi.push(num2);
        console.log(numHi)
      }
    })
  })
  return (maxOfArray(numHi))
}