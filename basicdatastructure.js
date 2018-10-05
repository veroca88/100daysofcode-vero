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
