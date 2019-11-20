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

let someArr = ['abc', 'asasas', 'abas', 'bas', 'assa'];
function longestString(strings) {
  //
  let arr = [...strings];
  let stringLength = [];
  for (let i = 1; i < arr.length; i++) {
    stringLength.push(arr[i].length);
  }
  let maxLength = Math.max(...stringLength);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length === maxLength) return arr[j];
  }
}
// function longestString(strings) {
//   //
//   let arr = [...strings];
//   let longestString = [];
//   for (let i = 1; i < arr.length; i++) {
//     longestString = arr[0];
//     if (arr[i].length > longestString.length) {
//       longestString = arr[i];
//     }
//   }
//   return longestString;
// }

// function longestString(strings) {
//   //
//   let arr = [...strings];
//   let longestWord = 0;
//   let word = Math.max(...arr);
//   console.log('Output for: longestString -> word', word);
//   if (word > longestWord) {
//     longestWord = word;
//   }
//   return arr[longestWord];
// }
console.log(longestString(someArr));
// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
// let arr = ['foo', 'bar', 'foo', 'baz', 'bar', 'fizz', 'foo'];
// function findUnique(wordsArr) {
//   //1-way.
// //==================================================
//   for (let i = 0; i < wordsArr.length; i++) {
//     if (
//       wordsArr.indexOf(wordsArr[i]) == i &&
//       wordsArr.indexOf(wordsArr[i], i + 1) == -1
//     ) {
//       return wordsArr[i];
//     }
//   }
//   return false;
// }

// // another way
// 2-way.
// //==================================================
function findUnique(wordsArr) {
  if (wordsArr.length) {
    let uniques = wordsArr.filter(
      (el, idx, arr) => arr.indexOf(el) === arr.lastIndexOf(el)
    );
    return uniques[0];
  }
  return false;
}

//3-way.
// //==================================================
// var arr = [-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3];
// var n = arr.length;
// var result = [];
// function nonrep() {
//   for (var i = 0; i < n; i++) {
//     for (var j=0 ; j < n; j++)
//       if (i!=j && arr[i]==arr[j])
//         break;
//     if(j==n)
//         result.push(arr[i]);
//   }
//   return result;
// }
// console.log(nonrep())

// console.log(findUnique(arr));

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the largest number in a two dimensional array
// var matrix = [
//   [9, 1, 1331, 42],
//   [3133, 13, 1],
//   [931, 3131, 0],
// ];

function maxTwoDimArray(matrix) {
  //
  let max = 0;

  for (let i = 0; i < matrix.length; i++) {
    let max1 = Math.max(...matrix[i]);
    if (max1 > max) {
      max = max1;
    }
  }

  return max;
}
// console.log(maxTwoDimArray(matrix));

// //another way ===>>>
// //==================================================
// function maxTwoDimArray(matrix) {
//   //
//   let max = 0;
//   let maxArr = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[i].length; j++) {
//       maxArr.push(matrix[i][j]);
//     }
//   }
//   max = Math.max(...maxArr);

//   return max;
// }
// maxTwoDimArray(matrix);
// //==================================================
