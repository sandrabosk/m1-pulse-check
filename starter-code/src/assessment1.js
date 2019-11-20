// Write a function that returns the product of 2 numbers
function product(x, y) {
    //
    return x * y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
    //
    return (num % 2 === 0)
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
    //
    return (a > b) ? a : b;
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
    let max = maxOfTwoNumbers(a, b);
    return (max > c) ? max : c;
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
    //
    if (numbers.length === 0)
        return 0;
    let sum = numbers.reduce((elem, acc) => {
        return acc += elem;
    }, 0);
    return sum;
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
    //
    let max = numbers.reduce((elem, acc) => {
        return (elem > acc) ? elem : acc;
    }, 0);
    return max;
}

// Return the longest string in an array
function longestString(strings) {
    //
    let longString = strings.reduce((elem, acc) => {

        return (elem.length >= acc.length) ? elem : acc;
    }, 0);
    return longString;
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
    //
    let result = false;
    wordsArr.forEach(element => {
        if (element === word)
            result = true;
    });
    return result;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {

    if (!wordsArr.length)
        return false;
    let noDuplicate = "";
    let sorted_arr = wordsArr.slice().sort();
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i]) {
            noDuplicate = sorted_arr[i];
            i = sorted_arr.length - 1;
        }
    }
    return noDuplicate;
}

// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
    //
    return `${personObj.firstName} ${personObj.lastName}`
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
    //
    let newFlatArray = matrix.flat();
    newFlatArray.sort((a, b) => {
        return b - a
    });
    return newFlatArray[0];
}