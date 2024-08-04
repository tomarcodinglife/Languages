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

/*
Types of Data Type
Two Types od Data Types : Primitive and Non-Primitive 
Primitive Data Type (7 Types ) : String, Number, Boolean, Null, Undefined, Symbol, BigInt
Non-Primitive Data Type : Object, Array, Function, Date, RegExp, Map, Set
*/

let dtv01 = "Sujit Tomar" //String
let dtv02 = 454 //number
let dtv03 = false //boolean
let dtv04 = null // null
let dtv05 
// let dtv06 = symbol (dtv02) // symbol
// let dtv07 = symbol (dtv02) // symbol
// let dtv08 = BigInt(5255252456655456620520500505050005005545488885651255) //big integer (Bigint)

// console.table([typeof(dtv01), typeof(dtv02), typeof(dtv03), typeof(dtv04), typeof(dtv05)])
console.log(dtv06 === dtv07)