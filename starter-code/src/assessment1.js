// Write a function that returns the product of 2 numbers
function product(x, y) {
  //
  return x * y;
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
  //
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  } else if (a < 0 && b < 0) {
    return Math.ceil(a);
  }
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //
  let highestNum = 0;
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else if (c > a && c > b) {
    return c;
  } else if (a < 0 && b < 0 && c > 0) {
    return Math.ceil(a);
  }
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  let sum = 0;
  if (numbers.length === 0) {
    return 0;
  }
  for (let i = 0; i < numbers.length; i++) {

    sum += numbers[i];

  }
  return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
  let highNum = [0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highNum) {
      highNum = numbers[i];
    }
  }
  return highNum;
}

// Return the longest string in an array
function longestString(strings) {
  //
  /*let longWord = strings.sort(function (a, b) {
    return b.length - a.length;
  })[0];
  return longWord;*/
  var longWord = strings[0];
  var acc;

  for (var i = 1; i < strings.length; i++) {
    acc = strings[i];

    if (acc.length > longWord.length) {
      longWord = acc;
    }
  }
  return longWord;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
  let exist = false;
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i] === word) {
      exist = true;
    }
  }
  return exist;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //

  if (wordsArr.length === 0) {
    return false;
  }


}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
  return `${personObj.firstName} ${personObj.lastName}`;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}
