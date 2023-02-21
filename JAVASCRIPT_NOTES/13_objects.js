// Important : Object is not iterable so we can only use [for-in : It gives keys]
// we can't use [for-of, forEach], but there are some tricky ways to do it

let myInfo = {
    name : "Maizoddin",
    age : 22,
    usn : "2GI20CS406",
    college : "KLS GIT"
}


// Accessing Elements
let myAge = myInfo.age;        // " " is not required
// OR
let myName = myInfo["name"];  //  " " is required

// Adding new Keys and Values
myInfo.sem = 7;
// OR
myInfo["sem"] = 7;

// Deleting item
// delete udemy.college


console.log("Length : ", Object.keys(myInfo).length);      // Length
// 5

console.log("Keys : ", Object.keys(myInfo));               // It returns array of Keys
// [ 'name', 'age', 'usn', 'college', 'sem' ]

console.log("Values : ", Object.values(myInfo));           // It returns array of Values
// [ 'Maizoddin', 22, '2GI20CS406', 'KLS GIT', 7 ]

console.log("Item : ",Object.entries(myInfo));             // It return array of array's 
// [[ 'name', 'Maizoddin' ], [ 'age', 22 ], [ 'usn', '2GI20CS406' ], [ 'college', 'KLS GIT' ]]

console.table(myInfo);                                     //Prints in Tabular Form


// for in
for (let key in myInfo){
  console.log(key);
}

// for of
// Printing Values
for (let value of Object.values(myInfo)){
  console.log(value);
}


// Check Whether key exists or not
if (myInfo.salary){
  console.log("Exists");
}else{
  console.log("Does Not Exists");
}

// ----------------------------------------------------------------------------------

// Methods in Objects

// Important
// Inside objcet use "Normal Function". Don't use "Arrow Functions"
// Inside Arrow Functions "this" keywords refers to global Object
// Inside Normal Function "this" keyword refers to current object

// Example

let udemy = {
    name:"Maizoddin",
    age : 22,
    enrolledCourses : [],
    buyCourse : function(name,price) {
      this.enrolledCourses.push([name,price])
      },
    myCourses : function()  { 
      console.log("MyCources : ");
      console.log("No    CourseName      coursePrice");
      this.enrolledCourses.forEach((course,idx) => {console.log(`${idx+1}    ${course[0]}    ${course[1]}/-`);})
      }
  }

// Adding Methode from outside
udemy.getCourceCertificate = function(){
      this.enrolledCourses.forEach((cource) => console.log(`Congratulation's You have Successfully Completed ${cource[0]} Cource`))   
}

// Deleting Methode 
// delete udemy.getCourceCertificate

  udemy.buyCourse("  React JS     ",  449)
  udemy.buyCourse("  Angular JS   ",  449)
  udemy.buyCourse("  Node JS      ",  550)
  udemy.myCourses()
  udemy.getCourceCertificate()

  