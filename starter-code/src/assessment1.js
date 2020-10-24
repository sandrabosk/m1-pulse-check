// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  let isEven;
  if (num % 2 === 0){
    isEven = true;
  } else {
    isEven = false;
  }
  return isEven;
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a, b);
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a, b, c);
  //
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if (numbers === [] || !numbers){
    return 0;
  }
  const updatedTotal = numbers.reduce (function (total, el) { 
  // why is total NaN as soon as we add the second el ???
    total+= el; 
    return total;
  }, 0);
  return updatedTotal;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  if (numbers === [] || !numbers){
    return 0;
  }
  const maxNumber = numbers.reduce ((total, el)=> {
    if (total < el){
      total = el;
    }
    return total;
  }, 0);
  return maxNumber;
  //
}
// Return the longest string in an array
function longestString(strings) {
  if (strings === [] || !strings){
    return 0;
  }
  const lengths = strings.map ((el)=>{
    return el.length;
  });
  //
  let winnerIndex;
  const longestStrIndex = lengths.reduce((total, el, i)=>{
    if (total < el){
      total = el;
      winnerIndex = i;
    }
    return total;
  }, 0);
  return strings[winnerIndex];
}

/*//Return the longest string in an array: THIS ALSO WORKS!
function longestString(strings) {
  if (strings === [] || !strings){
    return 0;
  }
  let indexOfLongest = 0;
  const longestStr = strings.reduce ((total, el, i)=> {
    if (total < el.length){
      total = el.length;
      indexOfLongest = i;
    } else {
      total = strings[i-1].length;
    }
    if (i === strings.length - 1){
      return indexOfLongest;
    } 
    return total;
  }, 0);
  return strings[longestStr];
}*/

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let wordExists = false;
  wordsArr.forEach((el) => {
    if (word === el){
      wordExists = true;
    }
  });
  return wordExists;
}
/*// Return whether a word is in an array: THIS ALSO WORKS
function doesWordExist(wordsArr, word) {
  let wordExists = false;
  for (i=0; i < wordsArr.length; i++){
    if (word === wordsArr[i]){
      wordExists = true;
    }
    if (i === wordsArr.length-1){
      return wordExists;
    } 
  }
}*/

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  if (!wordsArr || wordsArr === [] || wordsArr.length === 0){
    return false;
  }
  // find the first different element
  for (let i=0; i < wordsArr.length; i++){
    for (let j=i+1; j < wordsArr.length; j++){
      console.log("compare "+i+" to "+j)
      if (wordsArr[i] !== wordsArr[j]){
         //wordsArr[j] is now the first different element
         //check now if it is not repeated
         if (!wordsArr.splice(j,j+1).includes(wordsArr[j])){
           return wordsArr[j];
         }
      }
    }
    if (i === wordsArr.length-1 && j === wordsArr.length){
        return false;
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  fullName = personObj.firstName +" "+ personObj.lastName;
  return fullName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  let bestScores = [];
  for (let i = 0; i<matrix.length; i++){
      bestScores.push(Math.max(...matrix[i]));
      console.log(bestScores)
  }
  return Math.max(...bestScores);
}
