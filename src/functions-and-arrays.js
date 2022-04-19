// Iteration #1: Find the maximum
//declare a function ( maxOftwoNumbers)- Parameters (num1 and num2)
// return with the Math.max function. 
// console.log (maxOfTwoNumbers)

function maxOfTwoNumbers(num1, num2) {
  return Math.max(num1, num2)
}
console.log(maxOfTwoNumbers(10,20));

//answer is 20 (num2 has the value of 20)


// Iteration #2: Find longest word
// declare a function (findLongestWord) add (parameter)=(arr)
// use for loop to loop over the words starting from 0. Get arr length. and use i++ to stop the loop at the last word.
// if arr.[i].length is equal to the longest word.length you have found the longest word.
// return the longestword.

const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {
  let longestWord = '';

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > longestWord.length) {
      longestWord = arr[i];
    }
  }
  return longestWord;
}
console.log(findLongestWord(words));


// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// an array of numbers
// declare  function sumNumbers ( parameter = numbers )
// declare a new variable named sum = equal to 0.
// use for loop. Starting from counting from 0. take the full numbers of length and use i++ to stop the loop at the end
// sum += (plus equal)numbers(index)
// return sum. 
// you consol log sumNumbers(numbers);


function sumNumbers(numbers) {
  let sum = 0;
for(let i = 0; i < numbers.length; i++){
  sum += numbers[i];
}
return sum;
}
console.log(sumNumbers(numbers));



// Iteration #3.1 Bonus:
function sum() {}



// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
// an arrray of numbers 
/* declare an function averageNumbers (parameter numbersAvg)
declare a new variable
use for loop function with numbersAvg.length
sum1 += ( plus equal) numbersAvg[i]
return sum1 / (because you want to division,average) numbers.Avg.length
console log the averageNumbers(numbersAvg)*/

function averageNumbers(numbersAvg) {
  let sum1 = 0;
  for(let i = 0; i < numbersAvg.length; i++){
    sum1 += numbersAvg[i];
}
return sum1  / numbersAvg.length;
}
console.log(averageNumbers(numbersAvg));


// Level 2: Array of strings
// create a function with the variable name averageWordLenght(with a cappucino name stringArray(parameter))
// if the string.array.lenght (is equal to zero) return NULL
// create a new variable with an empty array so we can push the elements in that empty array
// use the for each so it can loop over the words. Give it a cappu name (see element) 
// call the function where you actually push the empty array
// when you have everything in your empty array then divide the total stringArray.lenght and you will get the result 6



const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(stringArray){
  if(stringArray.length == 0){
   return null;
 } 
 let LenghtAvg = [];

 stringArray.forEach((element) =>{
   stringLenghtAvg.push(element.length);
 })

 return sum(LenghtAvg) / stringArray.length;

}
  


// Bonus - Iteration #4.1
function avg() {}

// Iteration #5: Unique arrays
// create a function with uniquifyArray /variablename (cappu name arr)
// create a new variable with a empty array which you push your new array
// looop over ever word with the for function
// if you done that check the newArr index if the words is already there than dont push it in the array.
// return myNewArr and you get only the unique words. the dublicated are not pushed in. 
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(arr) {
  const myNewArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (myNewArr.indexOf(arr[i]) < 0) {
      myNewArr.push(arr[i]);
    }
  }
  return myNewArr;
}
console.log(uniquifyArray(wordsUnique));
  



// Iteration #6: Find elements
// create a function doesWordExist (arr,word (cappu name))
// if the arr.lenght is 0 return null
// use a for loop to loop over the full arr.lenght
// if in the arr the word includes the word than return true ir not return false
// consolelog the function doeswordExist and then refer to the variablename from the string array. 
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

function doesWordExist(arr, word) {
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(word)) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(doesWordExist(wordsFind));



// Iteration #7: Count repetition
// Create a fucntion with variablename howManyTime (parameter cappu name - arr and word)
// create a new variable with variable name myNum = (is equal to 0) because you start counting from 0
// use an for each function so it can loop over the words
// if the word is equal to element then count +1 if not return 0
// return myNum (because you will get the result from the counted wors that has been the same)
// console log the function plus the wordsCount and which word you actually wanne log. 
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];

function howManyTimes(arr, word) {
  let myNum = 0;
  arr.forEach(function (element, index) {
    if (word === element) {
      myNum = myNum + 1;
    } else {
      return null;
    }
  });
  return myNum;
}

console.log(howManyTimes(wordsCount, 'machine'));
console.log(howManyTimes(wordsCount, 'matter'));
console.log(howManyTimes(wordsCount, 'subset'));
console.log(howManyTimes(wordsCount, 'trouble'));
console.log(howManyTimes(wordsCount, 'starting'));
console.log(howManyTimes(wordsCount, 'eating'));
console.log(howManyTimes(wordsCount, 'truth'));
console.log(howManyTimes(wordsCount, 'disobedience'));




// Iteration #8: Bonus
// count the greatest prodcut of the four adjacent numbers
// adjacent is any 4 numbers from horizontal and vertically
// use the splice
// get them in groups
// then mulitply by four
// then compare 
// get result 
const matrix = [
  [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
];
//

function greatestProduct() {}




// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
   averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
