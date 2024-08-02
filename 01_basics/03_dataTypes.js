/*
number =>  0, 1, 2, 3, ..... etc [2 to the power 53]
bigint => 
string => "Sujit" or "Patna" or "email@gmail.com"
boolean => true/false
null => standalone value / empty data type
undefined => 
symbol => 
object => 
*/
let fullName = "Sujit Kumar Singh";
let rollNumber = 52856784854
let emailId = "email@gmail.com";
let pass = true;
let state = null
let district = ""


console.table([fullName, rollNumber, emailId, pass, state, district])
console.table([typeof(fullName), typeof(rollNumber), typeof(emailId), typeof(pass), typeof(state), typeof(district)])