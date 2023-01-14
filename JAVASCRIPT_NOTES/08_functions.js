// Normal 
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(2, 2));


// Arrow function
let mul = (num1, num2) => { return num1 * num2 }
console.log(mul(2, 2));


// Function Expression
let sub = function (num1, num2) {
    return num1 - num2;
}
console.log(sub(2, 2));