// Write a function that returns the product of 2 numbers
function product(x, y) {
  return (x * y);
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num%2 === 0 ? true : false
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return a>b ? a :b ;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(a>b && a>c){
    return a}else if(b>c){
      return b;
    }return c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  numbers.forEach(element => sum += element);
  return sum ;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  let maxNumber = 0;
  if(numbers.length===0){
    return null;
  }else{
    for(let i=0 ; i<numbers.length;i++){
      if(numbers[i]>maxNumber){
        maxNumber = numbers[i];
      }else{
        continue;
      }
    }
  }return maxNumber;
}

// Return the longest string in an array
function longestString(strings) {
  let longestString = "";
  if(strings.length===0){
    return null;
  }else{
    for(let i=0 ; i<strings.length;i++){
      if(strings[i].length > longestString.length){
        longestString = strings[i];
      }else{
        continue;
      }
    }
  }return longestString
};


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  if(wordsArr.length===0){
    return null
  }else{
    for(let i=0 ; i<wordsArr.length ; i++){
      if(word === wordsArr[i]){
        return true;
      }else{
        return false
      }
    }
  }
}

// Finding the first non-duplicate (non-repeating) word in an array

function findUnique(wordsArr) {
  let cleanArr = []
  if(wordsArr.length ===0){
    return false ;
  }else{
    wordsArr.forEach(element => cleanArr.indexOf(element)<0 ? cleanArr.push(element) : "");
    for (let i=0 ; i<cleanArr.length;i++){
      let count = 0;
      wordsArr.forEach(element => element === cleanArr[i] ? count +=1:"");
      if(count === 1){
        return cleanArr[i];
      };
    }
  }
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  let fullName = personObj.firstName + " " + personObj.lastName;
  return fullName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  if(matrix.length === 0){
    return null;
  }else{
    let maxNumber = 0
    for(let i=0 ; i<matrix.length;i++){
      for(let j=0 ; j<matrix[i].length ; j++){
        if(matrix[i][j] > maxNumber){
          maxNumber = matrix[i][j];
        }else{
          continue;
        }
      }
    } return maxNumber;
  }
}
