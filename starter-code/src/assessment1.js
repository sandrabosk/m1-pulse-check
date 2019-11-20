// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
  //
}

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num%2 == 0) {
    return true;
  } else {
    return false;
  }
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  if (a > b)
    return a;
  else
    return b;
  //
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
			if(a > b && a > c)
				{
					return a;
				}
			else if(b > a && b > c)
				{
					return b;
				}
			else if(c > a && c > a)
				{
					return c;
        }

      }  //

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  if(!Array.isArray(numbers)) return;
  let sumArray = 0, i=-1;
  while (++i < numbers.length) {
     sumArray+=numbers[i];
  }
  return sumArray;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
 //
}

// Return the longest string in an array
function longestString(strings) {
 let max = strings[0].length;
  strings.map(v => max = Math.max(max, v.length));
  result = strings.filter(v => v.length == max);
  return result;
  
  console.log(longestString(['a', 'aa', 'aaa', 'aaaaa','aaaa']))
  
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
