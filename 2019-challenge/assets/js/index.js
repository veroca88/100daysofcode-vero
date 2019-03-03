function binarySearch (items, value) {
  items.forEach(element => {
    if (element === value) {
      console.log(items.indexOf(element))
    }
  })
}
var items = [1, 2, 3, 4, 5, 7, 8, 9]
binarySearch(items, 1)
binarySearch(items, 5)
binarySearch(items, 6)

/* Write a JavaScript program to shuffle an array. */
Array.prototype.shuffle = function () {
  var newShuffle = this
  var end = newShuffle.length - 1
  for (var i = end; i >= 0; i--) {
    var randomIdx = Math.floor(Math.random() * (i + 1))
    var numberAtIdx = newShuffle[randomIdx]

    newShuffle[randomIdx] = newShuffle[i]
    newShuffle[i] = numberAtIdx
  }
  return newShuffle
}
let temporaryArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
console.log(temporaryArr.shuffle())

/* Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters. The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */
function smallestCommons (arr) {
  var newArr = []
  if (arr[0] > arr[1]) {
    newArr.push(arr[1])
    newArr.push(arr[0])
  } else {
    newArr = arr
  }
  return newArr
  var smallestMultiple = 2
  var number = 1
  if (smallestMultiple % 2 === 0 && number < newArr[1]) {
    smallestMultiple++
    number++
  }
  console.log(smallestMultiple)
}

console.log(smallestCommons([5, 1]))
console.log(smallestCommons([13, 1]))
console.log(smallestCommons([1, 12]))

// List all prime numbers 0 to 100

for (var counter = 0; counter <= 100; counter++) {
  var notPrime = false
  for (var i = 2; i <= counter; i++) {
    if (counter % i === 0 && i !== counter) {
      notPrime = true
    }
  }
  if (notPrime === false) {
    console.log(counter)
  }
}
/* 15. Drop it. Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it. Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */
function dropElements (arr, func) {
  var times = arr.length
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break
    } else {
      arr.shift()
    }
  }
  return arr
}

dropElements([1, 2, 3], function (n) { return n < 3 })

/* There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. */
function indexSum (array1, array2) {
  let newSumIndex = []
  let value = 0
  while (value < array1.length && value < array2.length) {
    newSumIndex.push(array1[value] + array2[value])
    value++
  }
  if (array1.length === value) {
    for (var x = value; x < array2.length; x++) {
      newSumIndex.push(array2[x])
    }
  } else {
    for (var y = value; y < array1.length; y++) {
      newSumIndex.push(array1[y])
    }
  }
  return newSumIndex
}
let array1 = [1, 0, 2, 3, 4]
let array2 = [3, 5, 6, 7, 8, 13]
console.log(indexSum(array1, array2))
/* Expected Output :
[4, 5, 8, 10, 12, 13] */

/* Practice some recursion exercise */

// without recursive function
let mathFactorialNumber = function (num) {
  let result = 1
  let count
  for (count = num; count > 1; count--) {
    result *= count
  }
  return result
}
console.log(mathFactorialNumber(10))

// with recursive function

var factorialNum = function (numb) {
  if (numb <= 0) {
    return numb = 1
  } else {
    return numb * factorialNum(numb - 1)
  }
}

console.log(factorialNum(10))

/* Flatten a nested array. You must account for varying levels of nesting. */
function steamrollArray (arr) {
  let newArr = []

  flatter(arr)
  function flatter (arr) {
    arr.forEach(function (item) {
      if (!Array.isArray(item)) {
        newArr.push(item)
      } else {
        flatter(item)
      }
    })
  }
  return newArr
}
console.log(steamrollArray([1, [2], [3, [[4]]]]))

/* Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers. */

var greatestCommonDivisor = function (numberA, numberB) {
  var gcm = []

  for (var i = 0; i < Math.max(numberA, numberB); i++) {
    if (numberA % i === 0 && numberB % i === 0) {
      gcm.push(i)
    }
    return gcm
  }
}

console.log(greatestCommonDivisor(56, 42))

/* Write a JavaScript program to find duplicate values in a JavaScript array. */
function findDuplicates (arr) {
  let object = {}
  let result = []

  arr.forEach(function (number) {
    if (!object[number]) { object[number] = 0 }
    object[number] += 1
  })

  for (let key in object) {
    if (object[key] >= 2) {
      result.push(key)
    }
  }
  return result
}

console.log(findDuplicates([2, 3, 4, 2, 5, 6, 4, 7, 8, 2, 6, 9]))

/* Write a JavaScript program to compute the union of two arrays.
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100] */
function unionArr (arr1, arr2) {
  let object = {}
  let result = []
  let twoInOneArr = arr1.concat(arr2)

  twoInOneArr.forEach(function (number) {
    if (!object[number]) { object[number] = 0 };
    object[number] += 1
  })

  for (let key in object) {
    if (object[key] <= 2) {
      result.push(key)
    }
  }
  return result
}
console.log(unionArr([1, 2, 3], [100, 2, 1, 10]))
// [1, 2, 3, 10, 100]

/* Write a JavaScript function to find the difference of two arrays.
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100" */
function difference (arr1, arr2) {
  let twoInOneArr = arr1.concat(arr2)
  let newArr = []
  let object = {}
  let result = []

  flatten(twoInOneArr)
  function flatten (twoInOneArr) {
    twoInOneArr.forEach(number => {
      if (!Array.isArray(number)) {
        newArr.push(number)
      } else {
        flatten(number)
      }
    })
  }

  newArr.forEach(function (number) {
    if (!object[number]) { object[number] = 0 };
    object[number] += 1
  })

  for (let key in object) {
    if (object[key] === 1) {
      result.push(key)
    }
  }
  return result
}
console.log(difference([1, 2, 3], [100, 2, 1, 10]))
// ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]]))
// ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]))
// ["3", "10", "100"

// Return an English translated sentence of the passed binary string.

function binaryAgent(str) {  
  let split = str.split(' ');
  let newArr = [];
  let result = [];
  
  for(var i = 0; i < split.length; i++) {
    
    newArr.push(parseInt(split[i], 2));
    result.push(String.fromCharCode(newArr[i]));
    
  }
  
  return result.join('');
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"))

/* Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'. 
EXERCISE OF CODEWARS*/
function maskify(cc) {
let securityMask = cc.replace(/\w(?=\w{4})/gi, "#");
return securityMask
}

/* Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context. */

function truthCheck(collection, pre) {
  
  // Is everyone being true?
  return collection.every(value => value[pre])
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/* Given an integral number, determine if it's a square number: */

var isSquare = function(n){
let result = Math.sqrt(n)
if (Number.isInteger(result)) {
  return true
} else {
  return false
}
}

/* The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed. To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input
Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Note for F#: The input will be of (int list list) which is a List> */
function openOrSenior(data){
  var result = []
for (var i = 0; i < data.length; i++) {
  if (data[i][0] >= 55 && data[i][1] > 7) {
    result.push('Senior')
  } else {
    result.push('Open')
  }
}
  return result
}