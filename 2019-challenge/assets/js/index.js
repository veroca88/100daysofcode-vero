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

/* Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
Calling this returned function with a single argument will then return the sum:
var sumTwoAnd = addTogether(2);
sumTwoAnd(3) returns 5.
If either argument isn't a valid number, return undefined. */
function addTogether(elem1, elem2) {
  var checkNum = function (num) {
    if (typeof num !== 'number') {
      return undefined;
    } else {
      return num;
    }
  }
  if (arguments.length > 1) {
     var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    var c = arguments[0];
    if (checkNum(c)) {
      return function(arg2) {
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }
  }
}

addTogether(2,3);

/* Intermediate Algorithm Scripting: Make a Person
Fill in the object constructor with the following methods below: getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object. */

var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  
  var fullName = firstAndLast
  var namesSeparates = fullName.split(' ')

  this.getFirstName = function () {
    return namesSeparates[0];
  };

  this.getLastName = function () {
    return namesSeparates[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (first) {
    namesSeparates[0] = first;
    fullName = namesSeparates.join(' ');
  };

  this.setLastName = function (last) {
    namesSeparates[1] = last;
    fullName = namesSeparates.join(' ');
  };

  this.setFullName = function (firstAndLast) {
    fullName = firstAndLast;
    namesSeparates = fullName.split(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName()

/* Return a new array that transforms the elements' average altitude into their orbital periods (in seconds). The array will contain objects in the format {name: 'name', avgAlt: avgAlt}. You can read about orbital periods on Wikipedia. The values should be rounded to the nearest whole number. The body being orbited is Earth. The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = []
  var formulaA = 2 * Math.PI
  var getOrbPeriod = function (obj) {
    var formulaC = Math.pow(earthRadius + obj.avgAlt, 3)
    var formulaB = Math.sqrt(formulaC / GM)
    var orbPeriod = Math.round(formulaA * formulaB)
    delete obj.avgAlt
    obj.orbitalPeriod = orbPeriod
    return obj
  }
  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]))
  }
  return newArr
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

/* Palindrome Checker */

function palindrome(str) {
  var noSensitive = str.toLowerCase().replace(/\W|\_|\*/gi, '')
  var reverseNoSensitive = noSensitive.split('').reverse().join('')
  if (reverseNoSensitive === noSensitive) {
    return true
  } else {
    return false;
  }
}
palindrome("eye");

/* 21. *Roman Numeral Converter* Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */
function convertToRoman (num) {
  var ordinals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  var finalNumber = []
  let renum = num
  while (finalNumber.reduce((curr, value) => curr + value, 0) < num) {
    const idx = ordinals.findIndex(element => renum - element >= 0)
    finalNumber.push(ordinals[idx])
    renum -= ordinals[idx]
  }
  return finalNumber.map(element => romans[ordinals.indexOf(element)]).join('')
}

convertToRoman(36)

//Practice Map() Method

const primeNumbers = [1, 2, 3, 5, 7, 11]
let multiplicationNum = primeNumbers.map(number => {
  return number * 5
})
console.log(multiplicationNum)

//Using map() with call()
const fruit = ['apple', 2]
const map = Array.prototype.map
const fruitA = map.call(fruit, letter => {
            return `${letter}a`
          })
          console.log(fruitA)
//output ["applea", "2a"]
//Using only map()
const fruit = ['apple', 2]
const fruitA = fruit.map(letter => {
            return `${letter}a`
          })
          console.log(fruitA)
//output ["applea", "2a"]

var prehero = ['Bat', 'Spider']
var hero = prehero.map(hero => {
  return `${hero}man`
})
console.log(hero)

// Reformatting an array object

//Example one
const myFavoriteSongs = [
      { artist: 'Felix Jaenh', song: 'Book of love', timesPlay: 4},
      { artist: 'The temper trap', song: 'Sweet disposition', timesPlay: 3}
      ]

      const mostPopularSong = myFavoriteSongs.map(bestSong => {
        const container = {};

        container[bestSong.artist] = bestSong.song;
        container.timesPlay = bestSong.timesPlay * 5;

        return container;
      }) 

      console.log(mostPopularSong)
// Example two

const myFavoriteMeal = [
  {meat: 'chicken', option: 'potatoes', drink: 'beer'},
  {meat: 'ribbs', option: 'salad', drink: 'water'}
]

const myNewFavoriteFood = myFavoriteMeal.map(meal => {
  
const container = {}

  container[meal.meat] = meal.option;
  container.desert = 'chocolate cake';
  
  return container
  
})

console.log(myNewFavoriteFood)

//JavaScript Algorithms and Data Structures Projects: Caesars Cipher

var hi = 'Hello World'
var str = hi.split('')
var test = str.map(str, function(letter) {
  x = letter.charCodeAt(0);
  if (letter < 65 || letter > 90) {
  return String.fromCharCode(x)
} else if (x < 78) {
  return String.fromCharCode(x + 13)
} return String.fromCharCode(x - 13)}).join('')

console.log(test)

// Exercises using forEach() method

var newStudents = ['Veronica', 'Amalia', 'Jane', 'Eric', 'Carlos', 'Jonh']
newStudents.forEach(function(item, index, array) {
  if (item.length > 4) {
    console.log(item);
  } 
})

// Using the same array with for...in method

for (let key in newStudents) {
  if (newStudents[key].length > 4) {
    console.log(newStudents[key])
  }
}

// Using the same array with map() method

newStudents.map(function(name) {
if (name.length > 4) {
  console.log(name)
}
})

// Time for you to practice some arrays and foreach loops! 
// Create an array of your friends' names and print to the browser that each of them is your friend

var mesAmies = ['Erick', 'Naty', 'Dana', 'Karla', 'Gustavo'];

mesAmies.forEach(name => console.log(name + ' is my friend'))

// Create an array of the names of your favorite writers. Then use a foreach loop to print them to the browser with their letters reversed.
var favoriteWritters = ['Anthony Robbins', 'Isabel Allende', 'Gabriel Garcia Marquez'];

favoriteWritters.forEach(function(name) { 
  let eachWritter = name.split("").reverse().join('');
  console.log(eachWritter)})

  /* The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change with the bills he has at hand at that moment. Otherwise return NO. */
function tickets(peopleInLine) {
 var positive = 0;
 var negative = 0;
peopleInLine.map(function(element) {
  var bank = 0;
  var change = element - 25;
 
  if (change >= 0 && bank >= 0) {    
    bank += 25
  } if (change < bank) {
    bank = bank - change;
    positive = positive + 1
  } else if (change > bank) {
    negative = negative + 1
  } 
});
 if (negative >= positive) {
    return 'NO'
  } else {
     return 'YES'
  }
}
