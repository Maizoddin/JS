let nums = [12,11,14,16,17,19]

// fill
nums.fill(null, 1,5)
// fill(val, startIdx, endIdx) 
// It modifies the original array
// [12,null,null,null,null,19]

// filter
evenArray = nums.filter((num) => {return num%2==0})
// filter : It removes(filter out) the elements for which the condition false
// [12,14,16]

// map
squareArray = nums.map((num) => {return num*num})
// map : It applies the computation on each element of an array
// forEach does not return new array
// With map we can create new array

// reduce
let mul = nums.reduce((num1,num2) => {return num1*num2})
// It multiplies all the elements