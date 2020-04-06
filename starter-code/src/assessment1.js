// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  //
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  let maxNum = a;
  if (b > a && b > c) {
    maxNum = b;
  } else if (c > a && c > b) {
    maxNum = c;
  } else {
    maxNum = a;
  }
  return maxNum;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;

  numbers.forEach((num) => {
    sum += num;
  });
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxNum = 0;
  if (numbers.length !== 0) {
    numbers.forEach(function (num) {
      if (maxNum < num) {
        maxNum = num;
      }
    });
    return maxNum;
  }
}

// Return the longest string in an array
function longestString(strings) {
  //let longString = 0;
  let longestString = "";
  // [abc, aksdfk, dede]
  strings.forEach((string) => {
    if (longestString.length < string.length) {
      //longString = string.length;
      longestString = string;
    }
  });
  return longestString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if (wordsArr.includes(word)) {
    return true;
  } else {
    return false;
  }

  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

  if(!wordsArr.length){
    return false
  }else{
   
    let uniqueArr =[]
    let firstWord
   
    wordsArr.forEach(word => {
  
      if(!uniqueArr.includes(word)){
        uniqueArr.push(word)
        
             
        }else{
          uniqueArr.splice(uniqueArr.indexOf(word),1)
        }
      
    })
    return uniqueArr[0]
  }

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {

  return personObj.firstName + ' ' + personObj.lastName
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //  var matrix = [[9, 1, 1331, 42], [3133, 13, 1], [931, 3131, 0]];

  maxOfArray(matrix)

  let maxNum = 0;
  let maxTotal = 0
  
    matrix.forEach(arr (num) {
      arr.forEach(num => {
        if (maxNum < num) {
          maxNum = num;
          maxTotal = maxNum
          
        }

      })
      
    });
    return maxNum;
}
