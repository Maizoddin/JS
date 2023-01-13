// Premetive Data Types
// NN BB SS U
// number null boolean BigInt string symbol undefined

let a = 20;             // number
let b = null;           // null
let c = true            // boolean
let d = BigInt(2 ** 100)  // BigInt
let e = "JavaScript"    //string
let f = undefined       //undefined
let g;                  //Default undefined


//  Important
console.log(typeof (b)); // Type of Undefined is Undefined
console.log(typeof g);  // Type of null is object

// Non Premetive Data Types
// Object
let score = { "john": 25, "sam": 50 };
score["tom"] = 100;
console.log(score["tom"]);
console.log("Length : ", Object.keys(score).length);
console.log("Keys : ", Object.keys(score));
console.log("Values : ", Object.values(score));

// Example 
const userId = 200;
let userName = "Maizoddin"
let isValidUser = true
let paymentMode;
// Modern Printing
console.log(`
userId : ${userId}
userName : ${userName}
isVslidUser : ${isValidUser}
paymentMode : ${paymentMode}
`);