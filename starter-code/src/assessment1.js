// Write a function that returns the product of 2 numbers
//using concise arrow function
const product = (x, y) => x * y

// Write a function that returns whether a given number is even
//using concise arrow function
const isEven = num => num % 2 === 0;

// Return the largest of 2 numbers
//using concise arrow function
const maxOfTwoNumbers = (a, b) => Math.max(a, b);

// Return the largest of 3 numbers
//using concise arrow function
const maxOfThreeNumbers = (a, b, c) => Math.max(a, b, c);

// Calculate the sum of an array of numbers
//using arrow function 
const sumArray = numbers => {
  let sum = 0;
  numbers.forEach(function (num) {
    return sum += num;
  })
  return sum;
}

// Return the largest number of a non-empty array
//using concise arrow function
const maxOfArray = numbers => Math.max(...numbers);

// Return the longest string in an array
//using arrow function 
const longestString = strings => {
  let longestWord = strings[0];
  strings.forEach(function (word) {
    if (word.length > longestWord.length) {
      longestWord = word
    }
  })
  return longestWord
}

// // Return whether a word is in an array
//using concise arrow function
const doesWordExist = (wordsArr, word) => {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
//using function declaration
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false
  } else {
    let uniqueWords = [];
    for (let i = 0; i < wordsArr.length; i++) {
      if (wordsArr.indexOf(wordsArr[i], i + 1) === -1) {
        uniqueWords.push(wordsArr[i]);
      }
    }
    return uniqueWords[0];
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
//using concise arrow function
const getFullName = (personObj) => personObj.firstName + ' ' + personObj.lastName;


// Return the largest number in a two dimensional array
//using arrow function
const maxTwoDimArray = (matrix) => {
  let largestNumber = matrix[0][0];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (largestNumber < matrix[i][j]) {
        largestNumber = matrix[i][j];
      }
    }
  }
  return largestNumber
}

// //Bonus Questions
// //iteration 1
// //using arrow function
// const product = (x, y) => {
//   if (!Number(x) || !Number(x)) {
//     return false;
//   } else {
//     return x * y;
//   }
// }

// // iteration 2
// //using concise arrow function
// const isEven = num => num % 2 === 0;


// // iteration 3
// //using concise arrow function
// const maxOfTwoNumbers = (a, b) => Math.max(a, b);

// // iteration 4
// //using arrow function
// const maxOfThreeNumbers = (a, b, c) => {
//   if (!Number(a, b, c)) return false;
//   return Math.max(a, b, c);
// }

// //iteration 5
// //using arrow function
// const sumArray = numbers => {
//   if (typeof numbers !== 'object') {
//     return false
//   } else if (numbers.some((num) => { return typeof num !== 'number' })) {
//     return false
//   } else if (numbers.length === 0) {
//     return 0
//   } else {
//     const sum = numbers.reduce(function (a, b) {
//       return a + b
//     });
//     return sum
//   }
// }

// //iteration 6
// //using arrow function
// const maxOfArray = numbers => {
//   if (numbers.length !== 0 && Array.isArray(numbers)) {
//     return Math.max(...numbers);
//   } else {
//     return false
//   }
// }

// //iteration 7
// //using arrow function
// const longestString = stringsArr => {
//   if (stringsArr.length !== 0 && Array.isArray(stringsArr)) {
//     const longestStr = stringsArr.sort(function (total, el) {
//       return el.length - total.length;
//     })
//     return longestStr[0];
//   } else {
//     return false;
//   }
// }

// // // iteration 8
// //using arrow function
// const doesWordExist = (wordsArr, word) => {
//   if (wordsArr.length !== 0 && Array.isArray(wordsArr)) {
//     const chosenWord = word;
//     const isExistingWord = wordsArr.filter(function (word) {
//       return word === chosenWord;
//     })
//     return isExistingWord == chosenWord;
//   } else {
//     return false;
//   }
// }


// // //iteration 9
// //using arrow function
// const findUnique = wordsArr => {
//   if (wordsArr.length !== 0 && Array.isArray(wordsArr)) {
//     let uniqueWord = wordsArr.filter(function (word, i) {
//       return wordsArr.indexOf(word, i + 1) === -1;
//     })
//     return uniqueWord[0];
//   } else {
//     return false;
//   }

// }

// // //iteration 10
// function getFullName(personObj) {
//   console.log(typeof personObj)
//   if ((typeof personObj === 'object') && (personObj !== null) && (!Array.isArray(personObj))) {
//     return personObj.firstName + ' ' + personObj.lastName;

//   } else {

//     return false;
//   }
// }
// // // }

// // //iteration 11
// function maxTwoDimArray(matrix) {
//   if (typeof matrix !== 'object') {
//     return false
//   } else if (matrix.length === 0) {
//     return false
//   } else {
//     let largestNumber = matrix[0][0];
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = 0; j < matrix[i].length; j++) {
//         if (largestNumber < matrix[i][j]) {
//           largestNumber = matrix[i][j];
//         }
//       }
//     }
//     return largestNumber
//   }
// }


