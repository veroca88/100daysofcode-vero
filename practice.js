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

//Regular Expressions: Match Single Character with Multiple Possibilities
let multipleStr = "A rose by any other name would smell as sweet"
let vowelRegex = /[aeiou]/ig;
console.log(multipleStr.match(vowelRegex));

//Regular Expressions: Match Letters of the Alphabet
let letterStr = "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines"
let letterRegex = /s[h-u]/ig;
console.log(letterStr.match(letterRegex));

//Regular Expressions: Match Numbers and Letters of the Alphabet
let numandletStr = "October 1st, 1957 'In God We Trust' appears on US paper currency as an act to distinguish the US from the officially atheist USSR."
let numandletRegex = /[c-r1-9]/ig;
console.log(numandletStr.match(numandletRegex));

//Regular Expressions: Match Single Characters Not Specified
let notspecStr = "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines"
let notRegex = /s[^e123]/ig;
console.log(notspecStr.match(notRegex));

//Regular Expressions: Match Characters that Occur One or More Times
let timeStr = "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines"
let timeRegex = /shine+/ig;
console.log(timeStr.match(timeRegex));

//Regular Expressions: Match Characters that Occur Zero or More Times
let occurStr = "That’s fun, but hmm… I don’t think that’s my favorite"
let occurRegex = /h[mm]*/g;
console.log(occurStr.match(occurRegex));

//Regular Expressions: Find Characters with Lazy Matching
let lazyStr = "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines"
let lazyRegex = /S[a-z]*e/ig;
console.log(lazyStr.match(lazyRegex));

//Regular Expressions: Find One or More Criminals in a Hunt
let huntStr = "ERTYSDFGCVBCVBRFGTHCVB"
let crimRegex = /C+/g;
console.log(huntStr.match(crimRegex));

//Regular Expressions: Match Beginning String Patterns
let begStr = "Susie works in a shoeshine shop. Where she shines she sits, and where she sits she shines"
let begRegex = /^Susie/;
console.log(begRegex.test(begStr));

//Regular Expressions: Match Ending String Patterns
let endStr = "A rose by any other name would smell as sweet"
let endRegex = /rose$/;
console.log(endRegex.test(endStr));

//Regular Expressions: Match All Letters and Numbers
let allStr = "A rose by any other name would smell as sweet"
let sllRegex = /\w/g;
console.log(allStr.match(sllRegex));

//Regular Expressions: Match Everything But Letters and Numbers
let butStr = "That’s fun!%"
let butRegex = /\W/g;
console.log(butStr.match(butRegex));

//Regular Expressions: Match All Numbers
let allNmbers = "October 1 st, 1957 'In God We Trust' appears on US paper currency as an act to distinguish the US from the officially atheist USSR."
let nmbersRegex = /\d/g;
console.log(allNmbers.match(nmbersRegex));

//Regular Expressions: Match All Non-Numbers
let nonoStr = "October 1 st, 1957 'In God We Trust'"
let nonoRegex = /\D/g;
console.log(nonoStr.match(nonoRegex).length);

//Regular Expressions: Restrict Possible Usernames
let possNames = "veroca88"
let namesRegex = /\D[\d$]*/gi;
console.log(namesRegex.test(possNames));

//Regular Expressions: Match Whitespace
let spaceWhite = "That’s fun!%"
let whiteRegex = /\s/g;
console.log(spaceWhite.match(whiteRegex));

//Regular Expressions: Match Non-Whitespace Characters
let nonSpace = "That’s fun!%"
let spaceRegex = /\S/g;
console.log(nonSpace.match(spaceRegex));

//Regular Expressions: Specify Upper and Lower Number of Matches
let uperLower = "That’s fuuuuun!"
let uplowRegex = /f{1,5}/;
console.log(uplowRegex.test(uperLower));

//Regular Expressions: Specify Only the Lower Number of Matches
let onlyLower = "Yeeeeeeeih"
let lowerRegex = /Ye{8,}ih/;
console.log(lowerRegex.test(onlyLower));

//Regular Expressions: Specify Exact Number of Matches
let specificNum1 = "Yeeeeeeih"
let specificNum2 = "Yeeeeih"
let exactRegex = /Ye{4}ih/;
console.log(exactRegex.test(specificNum1));
console.log(exactRegex.test(specificNum2));

//Regular Expressions: Check for All or None
let englishStr = "location"
let spanishStr = "locacion"
let allnoneRegex = /locac?t?ion/;
console.log(allnoneRegex.test(englishStr));
console.log(allnoneRegex.test(spanishStr));

//Regular Expressions: Positive and Negative Lookahead
let lookaheadStr = "house34"
let laRegex = /(?=\w{7,})(?=\D*\d{2})/g;
console.log(laRegex.test(lookaheadStr));

let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/g; // Change this line
console.log(pwRegex.test(sampleWord));

//Regular Expressions: Reuse Patterns Using Capture Groups
let datePatternStr = "10 10 2018"
let datePatternRegex = /(^\d{0,})\s\1/;
console.log(datePatternRegex.test(datePatternStr));

//Regular Expressions: Use Capture Groups to Search and Replace
let sloganStr = "Think outside the box (Taco Bell)"
let fixSlogan = /box/;
let replaceWord = "bun";
console.log(sloganStr.replace(fixSlogan, replaceWord));

//Regular Expressions: Remove Whitespace from Start and End
let muchSpace = "   It's not whether you get knocked down, it's whether you get up.Vince Lombardi.   "
let lessSpace = /^\s*|\s*$/g;
let correctionSpace = "";
console.log(muchSpace.replace(lessSpace, correctionSpace));


