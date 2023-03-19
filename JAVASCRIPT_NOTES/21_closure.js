// Clousure   
// Function along with it's lexical  environment is known as closure
// Inner function gives access to outer function scope
Example :
function greet(){
   let name = "John";
   function sayHello(){
     console.log(`Good Morning ${name}`);
   }
   return sayHello;
}

let fun = greet();
fun();