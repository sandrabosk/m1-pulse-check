// Write a function that returns the product of 2 numbers
function product(x, y) {

  return x * y 
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {

  if(num % 2 === 0)
  return true
  else 
  return false
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  //

  if(a > b && b < a)
  return a
  else 
  return b


}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  //

  if(a > b &&  c < a)
  return a
  else if (b > a && c < b)
  return b
  else if (c > a && b < c)
  return c
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  //
  let result = 0;
  for(i = 0; i < numbers.length; i++){
    result += numbers[i]  
  } 
  return result
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {

  let result = numbers.sort((a, b) => b - a);

  return result[0]


}

// Return the longest string in an array
function longestString(strings) {
  // let result = strings.sort()
  // let resultFinal = [];


  // for(i = 0; i > result.length ; i++){

  //   let index =+ i;

  //   if(result[i].length > result[index].length)
  //   resultFinal.push(result[i]) 
  // }

  // return  resultFinal[0];
  // result.foreach((string)=>{
    
  // })

  
  const orderedArray = strings.sort(function (a, b) { 
    return b.length - a.length 
  })[0];

  return orderedArray;

}



// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  //

  const result = wordsArr.map((Oneword) => {
  
    if(Oneword === word){
      
      return true;
    }
    else
    return false

  })

  let totalResult = result.sort()
  let index = totalResult.length - 1


  return totalResult[index]
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  //
  if(wordsArr.length < 1 || wordsArr == undefined)
  return false
  
    function howManyTimes (arr, word) {
    let count = 0;

    for(let el of arr){
      if(el === word) 
      count ++
    }
  return count

  }
    const result = wordsArr.map((Oneword) => {
      return howManyTimes(wordsArr, Oneword)  
    }).indexOf(1)

  let wordFinal = wordsArr[result];

  return wordFinal

}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {

  // if(typeof(personObj) != "object")
  // return false;


  // for (const property in personObj) 

  //   if(property != undefined)
  //   let newObjet = Object.assign({}, )
  //   return personObj[property]
  
  

}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  
  let largest = [0][0];
  
  for (let i = 0; i < matrix.length; i++) {
	
		for (let j = 0; j < matrix[i].length; j++) {

			if (matrix[i][j] > largest) {
				largest = matrix[i][j];
			}
		}
	}

	return largest;




}
