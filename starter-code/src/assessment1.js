// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0? true : false;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return a > b? a : b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  else if (c > a && c > b) {
    return c;
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    sum += number;
  });
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxNumber = 0; 
  numbers.forEach(number => {
    if (number > maxNumber) {
      maxNumber = number;
    } 
  })
  return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longestString= ""
  strings.forEach(string => {
    if (string.length > longestString.length) {
      longestString = string;
    } 
  })
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let wordFound = false;
	wordsArr.forEach((element) => {
		if (element === word) wordFound = true;
	});
  return wordFound;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) return false;

  for (let i = 0; i < wordsArr.length; i++) {
    // indexOf() method returns the index of the first occurrence of the word in the array whereas lastIndexOf() method returns the index of the last occurence of the word in the array. If both indexes are equal that means the word is in the array only once.
    if(wordsArr.indexOf(wordsArr[i]) === wordsArr.lastIndexOf(wordsArr[i])){
      return wordsArr[i];
  }}
}

console.log(findUnique(['foo','bar','foo','baz','bar','fizz','foo']))


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
	let max = 0;
	matrix.forEach((row) => {
		row.forEach((column) => {
			if (column > max)
				max = column;
		});
	});
	return max;
}
