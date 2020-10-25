// // Write a function that returns the product of 2 numbers
// function product(x, y) {
//   return x * y;
// }

// // Write a function that returns whether a given number is even
// function isEven(num) {
//   return num % 2 === 0;
// }

// // Return the largest of 2 numbers
// function maxOfTwoNumbers(a, b) {
//   return Math.max(a, b);
// }

// // Return the largest of 3 numbers
// function maxOfThreeNumbers(a, b, c) {
//   return Math.max(a, b, c);

// }

// // Calculate the sum of an array of numbers
// function sumArray(numbers) {
//   let sum = 0;

//   numbers.forEach(function (num) {
//     return sum += num;
//   })
//   return sum;
// }

// // Return the largest number of a non-empty array
// function maxOfArray(numbers) {
//   return Math.max(...numbers);
// }

// // Return the longest string in an array

// function longestString(strings) {
//   let longestWord = strings[0];
//   strings.forEach(function (word) {
//     if (word.length > longestWord.length) {
//       longestWord = word
//     }
//   })
//   return longestWord
// }

// // // Return whether a word is in an array
// function doesWordExist(wordsArr, word) {
//   return wordsArr.includes(word);

// }

// // Finding the first non-duplicate (non-repeating) word in an array
// function findUnique(wordsArr) {
//   if (wordsArr.length === 0) {
//     return false
//   } else {
//     let uniqueWords = [];
//     for (let i = 0; i < wordsArr.length; i++) {
//       if (wordsArr.indexOf(wordsArr[i], i + 1) === -1) {
//         uniqueWords.push(wordsArr[i]);
//       }
//     }
//     return uniqueWords[0];
//   }
// }

// // Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
// function getFullName(personObj) {
//   return personObj.firstName + ' ' + personObj.lastName;
// }

// // Return the largest number in a two dimensional array
// function maxTwoDimArray(matrix) {
//   let largestNumber = matrix[0][0];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       if (largestNumber < matrix[i][j]) {
//         largestNumber = matrix[i][j];
//       }
//     }
//   }
//   return largestNumber
// }

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

  if (typeof numbers !== 'object') {
    return false
  } else if (numbers.some((num) => { return typeof num !== 'number' })) {
    return false
  } else if (numbers.length === 0) {
    return 0
  } else {
    const sum = numbers.reduce(function (a, b) {
      return a + b
    });
    return sum
  }
}

//iteration 6

function maxOfArray(numbers) {
  if (numbers.length !== 0 && Array.isArray(numbers)) {
    return Math.max(...numbers);
  } else {
    return false
  }
}

//iteration 7
function longestString(stringsArr) {
  if (stringsArr.length !== 0 && Array.isArray(stringsArr)) {
    const longestStr = stringsArr.sort(function (total, el) {
      return el.length - total.length;
    })
    return longestStr[0];
  } else {
    return false;
  }
}

// // iteration 8
function doesWordExist(wordsArr, word) {
  if (wordsArr.length !== 0 && Array.isArray(wordsArr)) {
    const chosenWord = word;
    const isExistingWord = wordsArr.filter(function (word) {
      return word === chosenWord;
    })
    return isExistingWord == chosenWord;
  } else {
    return false;
  }
}


// //iteration 9
function findUnique(wordsArr) {
  if (wordsArr.length !== 0 && Array.isArray(wordsArr)) {
    let uniqueWord = wordsArr.filter(function (word, i) {
      return wordsArr.indexOf(word, i + 1) === -1;
    })
    return uniqueWord[0];
  } else {
    return false;
  }

}

// //iteration 10
function getFullName(personObj) {
  console.log(typeof personObj)
  if ((typeof personObj === 'object') && (personObj !== null) && (!Array.isArray(personObj))) {
    return personObj.firstName + ' ' + personObj.lastName;

  } else {

    return false;
  }
}
// // }

// //iteration 11
function maxTwoDimArray(matrix) {
  if (typeof matrix !== 'object') {
    return false
  } else if (matrix.length === 0) {
    return false
  } else {
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
}


