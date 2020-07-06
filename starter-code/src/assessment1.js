// Write a function that returns the product of 2 numbers
const product = (x,y) => x*y;

// Write a function that returns whether a given number is even
const isEven = num => num % 2 === 0 ? true : false;

// Return the largest of 2 numbers
const maxOfTwoNumbers = (a, b) => a > b ? a : b;


// Return the largest of 3 numbers
const maxOfThreeNumbers = (a, b, c) => Math.max(a, b, c);


// Calculate the sum of an array of numbers
const sumArray = (numbers) => numbers.length!== 0 ? numbers.reduce((currentValue, currentIndex) => currentValue+ currentIndex) : 0;

// Return the largest number of a non-empty array
const maxOfArray = numbers => Math.max(...numbers);

// Return the longest string in an array
const longestString = strings => strings.reduce((a, b) => 
    (a.length > b.length)
    ? 
    a : (a.length===b.length)
    ?
    a : b
  );

// Return whether a word is in an array
const doesWordExist = (wordsArr, word) => wordsArr.includes(word)

// Finding the first non-duplicate (non-repeating) word in an array
// i was proving
const findUnique = wordsArr => wordsArr.filter(element => !wordsArr.includes(element));

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
