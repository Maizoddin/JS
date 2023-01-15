// BOM : Browser Object Model
 
// alert
alert("Hey Welcome to Age Alert PopUp!!")

// prompt
let age = prompt("Enter Your Age : ")

// confirm
let res = confirm("Do You want to display your Age: ")

// document.write
if (res == true){
  document.write(`Your Age is : ${age}`)
}
else{
  document.write("Your Age is : NA")
}

//--------------------------------------------------------------------------------------------

// DOM : Document Object Model

alert("Welcome to BackGround Game!!");
let choice = prompt("black or red : ");
switch(choice){
  case "black":
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    break;
  case "red":
    document.body.style.backgroundColor = "red";
    document.body.style.color = "black";
    break;
  default :
     document.body.style.backgroundColor = "yellow";
     document.body.style.color = "red";
     break  
}