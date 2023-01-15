// In javaScript when we call any function explicitly then only it will return it's actual result else it will just return [Function name]

// Example 
let age = 16;
let res = validAgeFun = (age) => {return age >= 20};
console.log(res)   
// O/P : [Function: validAgeFun]

let ans = validAgeFun(age);
console.log(ans);
// O/P : false

// -------------------------------------------------------------------------------
// We can call function with any of the references 
let var1 = var2 = actualFun = (age) => {return `Your Age is : ${age}`}
console.log(var1(age));
console.log(var2(age));
console.log(actualFun(age));
// Here we can call function with any name (var1, var2, actualFun)
