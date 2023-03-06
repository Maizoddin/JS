// Clousure   
// Function along with it's lexical  environment is known as closure
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