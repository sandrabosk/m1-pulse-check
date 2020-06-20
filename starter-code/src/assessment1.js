function logc(...param){
  console.log(...param)
}

// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y 
}
 //logc(product(10, 20))

// Write a function that returns whether a given number is even
function isEven(num) {
 return num%2===0 ? true : false
}
//logc(isEven(3))

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return a > b ? a : b
}

//log(maxOfTwoNumbers(3, 5))

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
   let biggerNum = 0
   if(a > b && a > c){
      biggerNum += a
   } else if(b > a && b > c){ 
     biggerNum += b
    } else {
      biggerNum +=  c
    }
   return biggerNum 
}

//logc(maxOfThreeNumbers(-1, -2, -3))

// Calculate the sum of an array of numbers
let arr = [1,2,3]
function sumArray(numbers) {
  
 return Array.isArray(numbers) === true  && numbers.length !== 0  ?  numbers.reduce((acc, num) => acc + num) : 0
 
}

//logc(sumArray(arr))

// let arr2 = [10, 4, 8, 1, "11", "hi"]

// function maxOfArray(numbers) {
//   let numbersCopy = [...numbers] /// or map//
//   //let numbersCopy = numbers.map(i => i)
//   let numbersOnly = numbersCopy.filter(i => typeof i === "number")
//   let sortNumbersArr = numbersOnly.sort((a,b) => a-b)
//   let largestNum = sortNumbersArr.pop()
// if(numbers.length !== 0) return largestNum 
// }
// logc(maxOfArray(arr2))

// if(Array.isArray(numbers) === false || numbers.length === 0 || numbers = []) return undefined;









let arr3 = [1,12,-3,30]
// // Return the largest number of a non-empty array
function maxOfArray(numbers) {
 let largestNum = numbers[0]

  for(i=1; i < numbers.length;i++){
    if(numbers[i] > largestNum){
      largestNum = numbers[i]
    }
  } 
  return largestNum 
}

logc(maxOfArray(arr3))

//// Return the largest number of a non-empty array
// function maxOfArray(numbers) {
//   if (numbers.length === 0 || !checkIfArray(numbers)) return false;
//   return Math.max(...numbers);
//   // numbers.sort((a,b) => a-b)
//   // return numbers[numbers.length-1]
// }

// Return the longest string in an array
function longestString(strings) {
  //
}


//log(longestString(strings))

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
}

//log(doesWordExist(wordsArr, word))

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// log(findUnique(wordsArr))


// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}
// log(getFullName(personObj))

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}








/////////////////IH ANSWER USING SANITIZING AND CALLBACKS///////////


// // checkIfNumber(x) and checkIfArray(x) are just helper functions,
// // since in every iteration we have to do type check to pass the test so we don't repeat these couple of lines 8+ times,
// // we are creating helper function and then just call it when needed

// function checkIfNumber(x) {
//   if (typeof x === 'number') return true;
//   else return false;
// }

// function checkIfArray(x) {
//   if (Array.isArray(x)) return true;
//   else return false;
// }

// // Write a function that returns the product of 2 numbers
// function product(x, y) {
//   if (!checkIfNumber(x) || !checkIfNumber(y)) return false;
//   else return x * y;
// }

// // function product(x, y) {
// //   if (typeof x !== "number" || typeof y !== "number" ) return false
// //   else return x * y;
// // }

// // Write a function that returns whether a given number is even

// function isEven(num) {
//   if (num % 2 === 0) return true;
//   else return false;
// }

// // Return the largest of 2 numbers
// function maxOfTwoNumbers(a, b) {
//   if (a > b) return a;
//   else return b;
// }

// // Return the largest of 3 numbers
// function maxOfThreeNumbers(a, b, c) {
//   if (!checkIfNumber(a) || !checkIfNumber(b) || !checkIfNumber(c)) return false;
//   else return Math.max(a, b, c);
// }

// // Calculate the sum of an array of numbers
// // function sumArray(numbers) {
// //   if (typeof numbers !== "object") return false
// //   else return numbers.reduce((acc, currVal) => acc+currVal, 0)
// // }

// function sumArray(numbers) {
//   if (!checkIfArray(numbers)) return false;
//   for (let i = 0; i < numbers.length; i++) {
//     if (!checkIfNumber(numbers[i])) return false;
//     continue;
//   }
//   return numbers.reduce((acc, currVal) => acc + currVal, 0);
// }

// // Return the largest number of a non-empty array
// function maxOfArray(numbers) {
//   if (numbers.length === 0 || !checkIfArray(numbers)) return false;
//   return Math.max(...numbers);
//   // numbers.sort((a,b) => a-b)
//   // return numbers[numbers.length-1]
// }

// // Return the longest string in an array
// function longestString(strings) {
//   if (!checkIfArray(strings) || strings.length === 0) return false;
//   let longest = strings[0];
//   // console.log(longest)
//   let length = strings.length;
//   for (let i = 0; i < length; i++) {
//     if (typeof strings[i] !== 'string') continue;
//     if (strings[i].length > longest.length) longest = strings[i];
//   }
//   return longest;
// }

// // Return whether a word is in an array
// function doesWordExist(wordsArr, word) {
//   if (!checkIfArray(wordsArr)) return false;
//   if (wordsArr.includes(word)) return true;
//   else return false;
// }

// // Finding the first non-duplicate word in an array
// function findUnique(wordsArr) {
//   if (!checkIfArray(wordsArr) || wordsArr.length === 0) return false;
//   for (let word of wordsArr) {
//     if (wordsArr.indexOf(word) === wordsArr.lastIndexOf(word)) {
//       return word;
//     }
//   }
// }

// // Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
// function getFullName(personObj) {
//   if (!(personObj.constructor === Object) || personObj.firstName === undefined || personObj.lastName === undefined)
//     return false;
//   else return `${personObj.firstName} ${personObj.lastName}`;
// }

// // Return the largest number in a two dimensional array
// function maxTwoDimArray(matrix) {
//   if (!checkIfArray(matrix) || matrix.length === 0) return false;
//   let highestNum = 0;
//   matrix.forEach(element => {
//     element.forEach(number => {
//       if (number > highestNum) {
//         highestNum = number;
//       }
//     });
//   });
//   return highestNum;
// }
// // alternative, fancier solution
// // function maxTwoDimArray(matrix) {
// //   const flatArr = matrix.flat( el => [...el]);
// //   return Math.max( ...flatArr );
// // }