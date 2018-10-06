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


