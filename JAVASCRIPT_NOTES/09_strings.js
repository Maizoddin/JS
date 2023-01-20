let name = "johnny singh";

// Important : String is immutable(i.e no methode can modify original string)
// We can use [for-in, for_of]
// we can't use [forEach]
// 

// length
console.log(name.length);     // 12

// indexOf
console.log(name.indexOf("y"));  // 5

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

// trim
console.log(name.trim());     // remove all extra space present at start and end of string  



