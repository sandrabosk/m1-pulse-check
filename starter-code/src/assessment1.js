// Write a function that returns the product of 2 numbers
function product(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num % 2 === 0;
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
  if (typeof a !== "number") {
    return false;
  }
  return Math.max(a, b, c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //console.log(Array.isArray(numbers), numbers);
  if (!Array.isArray(numbers)) {
    return false;
  }
  const result = numbers.reduce(function (total, el) {
    return (total += el);
  }, 0);

  return !isNaN(result) ? result : false;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return false;
  }

  return numbers.reduce(function (total, el) {
    if (el > total) {
      total = el;
    }
    return total;
  }, 0);
}

// Return the longest string in an array
function longestString(strings) {
  if (!Array.isArray(strings) || strings.length === 0) {
    return false;
  }

  return strings.reduce(function (total, el) {
    if (el.length > total.length) {
      total = el;
    }
    return total;
  }, []);
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }

  const repeat = [];
  const newArr = [];

  for (let i = 0; i < wordsArr.length; i++) {
    if (!newArr.includes(wordsArr[i])) {
      newArr.push(wordsArr[i]);
    } else {
      repeat.push(wordsArr[i]);
    }
  }
  const unique = wordsArr.filter(function (el) {
    return !repeat.includes(el);
  });

  return unique[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return matrix.reduce((total, el) => {
    if (Math.max(...el) > total) {
      total = Math.max(...el);
    }
    return total;
  }, 0);
}
