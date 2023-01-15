//Array Methods
// length, indexOf(), push(), pop(), delete, shift(), unshift(), sort(), reverse(), slice(), splice(), toString(), join(), concat(), Array.from(), forEach
let nums = [24, 6, 18, 699];

// length
console.log(nums.length);    

// ----------------------------------------------------------------

// indexOf()
console.log(nums.indexOf(18));  

// ----------------------------------------------------------------

// push()
nums.push(599,550)
// It add elements to the end of an array and returns the new length of an array

// ----------------------------------------------------------------

// pop()
nums.pop()
// It removes an element from end of an arrray and returns the removed element

// ----------------------------------------------------------------

delete nums[3] 

// ----------------------------------------------------------------

// shift()
nums.shift()
// It removes an element from start of an array and returns the removed element

// ----------------------------------------------------------------

// unshift()
nums.unshift(2,4)
// It adds elements to the start of an array and return the new length of an array

// ----------------------------------------------------------------

// reverse()
nums.reverse()

// ----------------------------------------------------------------

// slice()
sub = nums.slice(2,5);

// ----------------------------------------------------------------

// splice(arg1, arg2, arg3)
// arg1 = startIndex,  arg2 = numberOfElementsToBeRemoved, arg3 = newElements
nums.splice(2,3,360,480,900,4000)
// It modifies original array

// ----------------------------------------------------------------

// toString()
str = nums.toString()
// It converts an array into string "24, 6, 18, 699"

// ----------------------------------------------------------------

// join()
str = nums.join(" ")
// "24 6 18 699"

// ----------------------------------------------------------------

// concat()
newArray = nums.concat([11,22,33],[44,55,66])
// [ 24, 6, 18, 699, 11, 22, 33, 44, 55,66 ]

// ----------------------------------------------------------------

// Array.from()  
// It converts other iterables into an array
name = "john";
arr = Array.from(name);
// [ 'j', 'o', 'h', 'n' ]

// ----------------------------------------------------------------

// forEach
// It applies the given computation on each element of array
function square(num){
  console.log(num*num);
}
nums.forEach(square)
// OR
nums.forEach((num) => { console.log((num*num)) })

// It takes 3 arguments : value,index,array
nums.forEach((num,idx)=>{console.log(`Index : ${idx} and Value : ${num}`);})

// ----------------------------------------------------------------

// sort()
// nums.sort()   // Default it sorts in alphabetical order(dictionary order) => [ 18, 24, 6, 699 ]

// Assending order
function compare(a, b) {
  return a - b;
}
nums.sort(compare);
// OR
nums.sort(compare = (a,b) => {return a-b})
// OR
nums.sort((a,b) => {return a-b})

// Descending order
function compare(a, b) {
  return b - a;
}
nums.sort(compare);
// OR
nums.sort(compare = (a,b) => {return b-a})
// OR
nums.sort((a,b) => {return b-a})

// Note
/*
Here sort function takes custom function to sort elements based on our requiremnets
if positive = swap
if negative = don't swap
if 0 = don't swap
*/

// Example
function compare(person1,person2){
  let main = [
    "Venkatesh : 58LPA",
    "ShriHari : 23LPA",
    "Vivek : 16LPA",
    "Maqsood : 9.5LPA",
    "Prateek : 7.5LPA",
    "Prajwal : 6.25LPA",
    "Ameer : 5LPA",
    "Maizoddin : 3.5LPA",
  ];
  return main.indexOf(person1) - main.indexOf(person2)
}

let need = ["Vivek : 16LPA", "Ameer : 5LPA", "Prajwal : 6.25LPA","Venkatesh : 58LPA"]
need.sort(compare)