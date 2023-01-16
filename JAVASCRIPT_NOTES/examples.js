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

// -----------------------------------------------------------------------------------

// Driving School Game
alert("Welcome to Driving School Game!!");
let valid = (age) => {
  return age >= 20;
};
do {
  let age = prompt("Enter Your Age : ");
  age = Number.parseInt(age);
  if (valid(age)) {
    alert("You can Drive");
  } else {
    alert("You can't Drive");
  }
  again = confirm("Do you want to check again");
} while (again);

// -----------------------------------------------------------------------------------

// Site Visiting Game
alert("Welcom to Visiting Site")
let name= prompt("Enter Your Site : ");
location.href = `https://www.${name}.com`;

// -----------------------------------------------------------------------------------

// BackGround Color Changing Game
alert("Welcome to BackGround Changing Game");
color = prompt("Enter Your Color");
document.body.style.backgroundColor = color;

// -----------------------------------------------------------------------------------

// ToDo List
let myToDo = {
  day: "Monday",
  date: "16-01-2023",
  task: [],
  done: [],
  pending: [],
  report: function () {
    console.log(`Day : ${this.day} \nDate : ${this.date} \nTasks : ${this.task} \nDone : ${this.done} \nPendig : ${this.pending}`);
  },
};

let addTask = function (todo, desc) {
  todo.task.push(desc);
  todo.pending.push(desc);
};
let doneTask = function (todo, desc) {
  todo.done.push(desc);
  todo.pending = todo.pending.filter((task) => task != desc);
};

addTask(myToDo, "JavaScript");
addTask(myToDo, "DSA");
addTask(myToDo, "SEE");
doneTask(myToDo, "JavaScript");
addTask(myToDo, "MANJALI");
addTask(myToDo, "KSCST");
doneTask(myToDo, "MANJALI");
myToDo.report();

// -----------------------------------------------------------------------------------
