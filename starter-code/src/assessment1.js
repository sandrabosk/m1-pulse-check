// Write a function that returns the product of 2 numbers
function product(x, y) {
  return (x * y);
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false
  }

}



// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b) {
    return ("first is greater");
  } else {
    return ("second is greater");
  }


}


// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {


}

// Calculate the sum of an array of numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumArray(numbers) {
    let cont = 0;
      for(var i = 0; i < numbers.length; i++){
        cont++;
      }
    return cont;
  }




// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  //
}

// Return the longest string in an array
  var long1 = 0;
  function longestString(strings) {
    for (i = 0; i < strings.length; i++) {
      if (strings[i].length > long1) {
        long1 = strings[i].length;
      }
     
    }

    return long1;

  }




// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  //
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  //
}