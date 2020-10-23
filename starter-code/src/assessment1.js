// Write a function that returns the product of 2 numbers
function product(x, y) {
  if(isNaN(x) || isNaN(y)){
    return false
  }else{
    return x*y
  }

}
//console.log(product(1,"2"))

// Write a function that returns whether a given number is even
function isEven(num) {
    return num % 2 === 0
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a,b)
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if(isNaN(a) || isNaN(b) || isNaN(c)){
    return false
  }else{
    return Math.max(a,b,c)
  }

}
console.log(maxOfThreeNumbers(1,2,"3"))


// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if(numbers == []){
    return 0
  }else{
    return numbers.reduce((total,num) => {
      return total + num
    },0)
  }
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return Math.max(...numbers)
}

// Return the longest string in an array
const longestString = (strings) => {
  let longestString = "";

  strings.forEach((str)=>{
    if(longestString.length < str.length){
      longestString = str;
    }
  })

  return longestString

  }


// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  return wordsArr.includes(word)
}


// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

    let uniqueArr = [];
    if(wordsArr.length == 0){
      return false

    }
    else{wordsArr.forEach((word,i)=>{

      if(wordsArr.indexOf(word) == i && wordsArr.indexOf(word,i+1) == -1){
        uniqueArr.push(word);

      }

    })
      return uniqueArr[0];
    }

}
//console.log(findUnique([]))




// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + " " + personObj.lastName
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  const largeNumList = matrix.map((arr=>{
    return Math.max(...arr);
  }))
  //console.log(largeNumList)
  return Math.max(...largeNumList);
}
//console.log(maxTwoDimArray([[1,2,3],[4,5,6],[7,8,9]]))