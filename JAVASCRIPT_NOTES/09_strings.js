// Important : String is immutable(i.e no methode can modify original string)
// We can use [for-in, for_of]
// we can't use [forEach]

let name = "johnny singh";

// length
console.log(name.length);     // 12

// indexOf("char",startIndex)
console.log(name.indexOf("n"));  // 3
// Return -1 if not found

// lastIndexOf("char",startIndex)
console.log(name.lastIndexOf("n"));  //  9
// Return -1 if not found

// toUpperCase
console.log(name.toUpperCase());   // JOHNNY SINGH    

// toLowerCase
console.log(name.toLowerCase());   // johnny singh    

// replace
console.log(name.replace("johnny", "tommy"));  // tommy singh  

// endsWith
console.log(name.endsWith("singh"));  // true

// startsWith
console.log(name.startsWith("johnny")); // true

// includes
console.log(name.includes("john"));  //true

// slice
console.log(name.slice(0, 4));    // john
// Here we can use Negative Index as well

// trim
console.log(name.trim());     // remove all extra space present at start and end of string  

// split()
let str = "Hey folks Good Morning";
let arr = str.split(" ");    // [ 'Hey', 'folks', 'Good', 'Morning' ]

let s = arr.join(" ");   // "Hey folks Good Morning"