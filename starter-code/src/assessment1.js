function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word);
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (wordsArr.length === 0) {
    return false;
  }
  let nonRepited = wordsArr.filter((word, index) => {
    return wordsArr.indexOf(word, index + 1) === -1;
  });
  return nonRepited[0];
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  const { firstName, lastName } = personObj;

  return firstName + " " + lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let maxNumbers1 = matrix.map((numbers) => {
    numbers.sort(function (a, b) {
      return b - a;
    });
    return numbers;
  });

  let maxNumbers2 = maxNumbers1.map((arr) => {
    arr.sort(function (a, b) {
      return b - a;
    });
  });

  return maxNumbers2[0];
}
