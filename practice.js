//Regular Expressions: Using the Test Method
let testStr = "REGULAR EXPRESSIONS"
let testRegex = /E/;
console.log(testRegex.test(testStr)); 

//Regular Expressions: Match Literal Strings
let wrongStr = "REGULAR EXPRESSIONS"
let wrongRegex = /e/;
console.log(wrongRegex.test(wrongStr));

//Regular Expressions: Match a Literal String with Different Possibilities
let countryStr = "This year France won the Fifa Word Cup"
let countryRegex = /Germany|USA|Brazil|Argentina|France/;
console.log(countryRegex.test(countryStr));

//Regular Expressions: Ignore Case While Matching
let myString = "REGULAR EXPRESSIONS";
let igcaseRegex = /regular/i;
console.log(igcaseRegex.test(myString));

//Regular Expressions: Extract Matches
let xtractStr = "October 1st, 1957 'In God We Trust' appears on US paper currency as an act to distinguish the US from the officially atheist USSR."
let dateRegex = /1957/;
console.log(xtractStr.match(dateRegex));

//Regular Expressions: Find More Than the First Match
let currencyPhrase = "October 1st, 1957 'In God We Trust' appears on US paper currency as an act to distinguish the US from the officially atheist USSR."
let phraseCountry = /us/gi;
console.log(currencyPhrase.match(phraseCountry));

//Regular Expressions: Match Anything with Wildcard Period
let examplePhrase = "A rose by any other name would smell as sweet"
let unRegex = /.ose/;
console.log(unRegex.test(examplePhrase));
