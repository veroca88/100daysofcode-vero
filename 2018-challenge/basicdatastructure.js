//Basic Data Structures: Use an Array to Store a Collection of Data

let yearArray = ["january", 12, 'march', 14, "may", 16, 'july', 18, "september", "this month"];
console.log(yearArray.length);

//Basic Data Structures: Access an Array's Contents Using Bracket Notation
let myArrayNumbersInEnglish = [ "six", "seven", "eight", "missing", "ten" ];
myArrayNumbersInEnglish[3] = "nine"; 
console.log(myArrayNumbersInEnglish);

//Basic Data Structures: Add Items to an Array with push() and unshift()
function sweetRecipe(arr) {
arr.unshift('F', 'e');
arr.push('a', 'd');
return arr;
}
console.log(sweetRecipe(['l', 'i', 'c', 'i', 'd']));

//Example of a basic Variables and how use the operators
var myVariablePractice = 'learning';
console.log(myVariablePractice)

//Operator not, does not equal - Conditionals

function operatorTest(num) {
if (num !== 5) {
  return 'false';
  }
  return 'true';
}
console.log(operatorTest(5));

function sameInitials(words) {
  if (words === 'VD') {
    return 'Veronica Donoso';
  }
  return 'Other person'
}
console.log(sameInitials('VD'));

function shoppingList(cant) {
  if (cant === 0) {
    return 'its time to go shopping';
  }
  return 'not yet';
}
console.log(shoppingList(3));

//Substraction, Multiplicacion and Division

function substraccionTwoNumbers(a,b) {
  let result = (a - b);
  return result;
}
console.log(substraccionTwoNumbers(10,5));

function multiplyTwoNumbers(x,y) {
  let result = x * y;
  return result
}
console.log(multiplyTwoNumbers(11,7));

function divisionTwoNumbers(x,y) {
  let result = x / y;
  return result
}
console.log(divisionTwoNumbers(45,5));

//Basic Data Structures: Remove Items Using splice()

function thirdNumber(arr) {
  arr.splice(0, 3);
  return arr.reduce((a, b) => a + b);
}
console.log(thirdNumber([5, 25, 125, 625, 3125]));
  
//Write a simple JavaScript program to join all elements of the following array into a string. Sample array : myColor = ["Red", "Green", "White", "Black"]; Expected Output : "Red,Green,White,Black" "Red,Green,White,Black" "Red+Green+White+Black"

var myFavoritePlaces = ["Florence", "Quilotoa", "Galapagos", "Venice"].reduce(function(a, b) { return a + b});
console.log(myFavoritePlaces);

//Basic Data Structures: Add Items Using splice()

function singTheSong(arr) {
arr.splice(1, 2, 'about a thing ', 'cause every little thing ');
return arr;
}
console.log(singTheSong(['Don\'t worry ', 'or you should worry ', 'too many things ', 'gonna be alright']));

//Basic Data Structures: Copy Array Items Using slice()
console.log(happyBirthday(['cake', 'ice cream', 'pizza', 'milkshake', 'hot dog', 'muffins']));
function happyBirthday(arr) {
let fifteenYearsOld = arr.slice(3, 5);
return fifteenYearsOld;
}

function arrayClone(arr) {
let newArray = [...arr];
return newArray;
}
console.log(arrayClone([1, 2, 4, 0]));
console.log(arrayClone([1, 2, [4, 0]]));

function quickCheck(arr, elem) {
  // change code below this line
  return arr.indexOf(elem)  
// change code above this line
}

// change code here to test different cases:
console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
