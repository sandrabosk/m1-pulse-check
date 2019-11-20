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

let someArr = ['abc', 'as', 'ab', 'basa', 'as'];
// function longestString(strings) {
//   //
//   let arr = [...strings];
//   let stringLength = [];
//   for (let i = 1; i < arr.length; i++) {
//     stringLength.push(arr[i].length);
//   }
//   let maxLength = Math.max(...stringLength);
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j].length === maxLength) return arr[j];
//   }
// }

// another way
function longestString(strings) {
  //
  let arr = [...strings];
  let longestString = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longestString.length) {
      longestString = arr[i];
    }
  }
  return longestString;
}
// console.log(longestString(someArr));
// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
let arr = ['foo', 'bar', 'foo', 'baz', 'bar', 'asa', 'fizz', 'baz', 'foo'];
//   //1-way.
// //==================================================
// function findUnique(wordsArr) {
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

//this example is also nice. Basically we're looping through arr and making if statement.
//if first found indexOf(arr[i]) gives the same index 'i' which means(true) exists, and
// after this element if indexOf(arr[i], i+1) returns -1 negative(notice that second argument i+1 is where to start looping through arr), which means(false)
//doesn't exists anymore. Then return this arr[i] element.

// // another way
// 2-way.
// //==================This is smartest way))================================
function findUnique(wordsArr) {
  if (wordsArr.length) {
    let uniques = wordsArr.filter(
      el => wordsArr.indexOf(el) === wordsArr.lastIndexOf(el)
    );
    return uniques[0];
  }
  return false;
}

// this function is looking for the element which has same index
//from beginning of arr and from end of arr,
// because fist and last index never gonna equal
//unless it's one word or element. Very logic.

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
