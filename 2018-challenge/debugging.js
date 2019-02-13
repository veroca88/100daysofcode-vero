//Debugging: Use typeof to Check the Type of a Variable
let product = "apples";
let costProduct = 0.65;
let buyCustomer = 5;
let finalPrice = costProduct * buyCustomer;
console.log(typeof product);
console.log(typeof costProduct);
console.log(finalPrice);

//Debugging: Catch Mixed Usage of Single and Double Quotes
let motivationPhrase = "One day Abraham Lincon said \"Whatever you are, be a good one.\"";
console.log(motivationPhrase);

//Debugging: Catch Use of Assignment Operator Instead of Equality Operator
let a = 4;
let b = 9;

if (a==b) {
result = "Yes, it does";
} else {
result = "Wrong!";
}
console.log(result);

//Debugging: Catch Missing Open and Closing Parenthesis After a Function Call
function wheather() {
let callFunction1 = "blue";
let callFunction2 = "sky";
return callFunction1 + callFunction2;
}
let callResult = wheather();
console.log(callResult);

//Debugging: Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(n, e) {
return Math.pow(n, e);
}
let n = 8;
let e = 3;
let simple = raiseToPower(n, e);
console.log(simple);

//Debugging: Catch Off By One Errors When Using Indexing
function shakespearWorks() {
let longestWord = "Honorificabilitudinitatibus";
let len = longestWord.length;
for (let i = 0; i < len; i++) {
console.log(longestWord[i]);
}
}
shakespearWorks(); 
