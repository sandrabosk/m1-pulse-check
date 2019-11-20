// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return ( num % 2 == 0);
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return (a < b ? b : a);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return (Math.max(a, b, c));
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = numbers.reduce( (acc, cur) => acc + cur, 0);
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let largest = numbers.reduce( (acc, cur) => {
    if ( acc < cur) acc = cur
    return acc;
  });
  return largest;
}

// Return the longest string in an array
function longestString(strings) {
  let largest = strings.reduce( (acc, cur) => {
    if ( acc.length < cur.length) acc = cur
    return acc;
  });
  return largest;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes( word );
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if( wordsArr.length ) {
    let uniques = wordsArr.filter( (el, idx, arr) => arr.indexOf(el) === arr.lastIndexOf(el) );
    return uniques[0];    
  }
  return false;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let flatArr = matrix.flatMap( el => [...el]);
  //console.log(flatArr)
  return Math.max( ...flatArr );
}
