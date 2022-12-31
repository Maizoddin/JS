// to Number
// "" => 0   "abc" => NaN    null => 0    undefined => NaN     true => 1    
// let temp = "45"
// let num = Number(temp)


// to String
// Everything gets converted in string
// let temp = 100
// let str = String(temp)


// to Boolean
// -5 => true    0 => false    null => false    undefined => false    "" => false    "abc" => true
// let temp = "abc"
// let bool = Boolean(temp) 



// EXAMPLES
// NULL + UNDEFINED
let temp1 = null + undefined
// TYPE = NUMBER
// VALUE = NaN

// NUMBER + UNDEFINED
let temp2 = 1 + undefined
// TYPE = NUMBER
// VALUE = NaN

// NUMBER + NULL
let temp3 = 100 + null 
// TYPE = NUMBER
// VALUE = 100

let temp4 = true + undefined
// TYPE = NUMBER
// VALUE = NaN

// NOTE : NULL = 0   TRUE = 1   FALSE = 0