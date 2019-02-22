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
