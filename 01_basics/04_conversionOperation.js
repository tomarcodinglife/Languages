let score = "abc123";
let socreNull = null;
let scoreUndefined = undefined;
let scoreBoolean = true;
let scoreString = "Sujit"

/*
console.log(typeof(score));
console.log (typeof score);
*/

let valueInNumber = Number(score);
let valueSocreNull = Number(socreNull);
let valueScoreUndefined = Number(scoreUndefined);
let valueScoreBoolean = Number(scoreBoolean);
let valueScoreString = Number(scoreString);

/*
console.log(typeof (valueInNumber));
console.log(valueInNumber)

console.table([typeof (valueInNumber), typeof (valueSocreNull), typeof (valueScoreUndefined), typeof(valueScoreBoolean), typeof(valueScoreString)])
console.table([valueInNumber, valueSocreNull, valueScoreUndefined, valueScoreBoolean, valueScoreString])
*/

//01
let isLoggedIn = 0;
let booleanIsLoggedIn = Boolean (isLoggedIn)
// console.log(booleanIsLoggedIn)

//02
let isLoggedInOne = 1;
let booleanIsLoggedInOne = Boolean (isLoggedInOne)
// console.log(booleanIsLoggedInOne)

//3
let isLoggedInEmpty = undefined  //null, empty 
let booleanIsLoggedInEmpty = Boolean (isLoggedInEmpty)
// console.log(booleanIsLoggedInEmpty)

//4
let isLoggedInString = "Sujit"
let booleanIsLoggedInString = Boolean(isLoggedInString)
// console.log(booleanIsLoggedInString) 

console.table([booleanIsLoggedIn, booleanIsLoggedInOne, booleanIsLoggedInEmpty, booleanIsLoggedInString])

// number convert in string
let myNumber = 1
let numberInString = Number (myNumber)
console.table([numberInString, typeof(numberInString)])