// Number Guessing Game
let ans =Math.trunc( (Math.random()) * 100)
let points = 0;
while (true){
   let guess = Number.parseInt(prompt("Number : "))
   points += 1
   if (guess == ans){
     console.log("You guessed it right");
     console.log(`Your Score is ${points}`);
     break
   }
   else if (guess < ans){
     console.log("Enter greater number");
   }
   else{
     console.log("Enter samller number");
   }
}