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

  numbers.forEach(function (num) {
    return sum += num;
  })
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers);
}

// Return the longest string in an array

function longestString(strings) {
  let longestWord = strings[0];
  strings.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })
  return longestWord
}

// // Return whether a word is in an array
// function doesWordExist(wordsArr, word) {
//   return wordsArr.includes(word);

// }

// Finding the first non-duplicate (non-repeating) word in an array
debugger
function findUnique(wordsArr) {
  let arrWords = '';
  let longestWord = '';
  for (let i = 0; i < wordsArr.length; i++) {
    if (arrWords.indexOf(wordsArr[i]) === -1) {
      arrWords = wordsArr[i];
    } else {
      longestWord = '';
    }
  }
  return longestWord;
}
console.log(findUnique("foo", "bar", "foo", "baz", "bar", "fizz", "foo"))

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let largestNumber = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j])
      if (largestNumber < matrix[i][j]) {
        largestNumber = matrix[i][j];
      }
    }
  }
  return largestNumber
}

//Bonus Questions
//iteration 1
function product(x, y) {
  if (!Number(x) || !Number(x)) {
    return false;
  } else {
    return x * y;
  }
}

// iteration 2
function isEven(num) {
  return num % 2 === 0;
}

// iteration 3
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
}

// iteration 4

function maxOfThreeNumbers(a, b, c) {
  if (!Number(a, b, c)) return false;
  return Math.max(a, b, c);
}

//iteration 5
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(function (number) {
    return sum += number;
  });
  return sum;
}
