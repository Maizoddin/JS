// Callback function
// callback function is a function that is passed as an argument to another function.

Example : 
function add(a, b, callback) {
    const result = a + b;
    callback(result);
  }
  
  function displayResult(result) {
    console.log('The result is: ' + result);
  }
  
  add(5, 10, displayResult);


Example :
function greet(name, callback){
    callback(name);
 }
 
 function sayCongrats(name){
   console.log(`Hey ${name} congratulations🎉`);
 }
 
 greet("max", sayCongrats);

 Example :
 setTimeout(()=>{console.log("This is callback function")}, 1000);