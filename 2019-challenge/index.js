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
  var sortedArr = arr.sort(function (a, b) {
    return a - b
  })
  var newArr = []

  for (var i = sortedArr[0]; i <= sortedArr[arr.length - 1]; i++) {
    newArr.push(i)
  }
  var condition = true
  var smallestMultiple = 0
  while (condition) {
    smallestMultiple++
    for (var j = sortedArr[0]; j <= sortedArr[arr.length - 1]; j++) {
      if (smallestMultiple % j !== 0) {
        break
      } else if (j === sortedArr[arr.length - 1]) {
        condition = false
      }
    }
  }
  return smallestMultiple
}
smallestCommons([1, 13])
