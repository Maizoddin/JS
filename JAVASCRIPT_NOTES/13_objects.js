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

// Printing
console.log("Length : ", Object.keys(myInfo).length);      // Length
console.log("Keys : ", Object.keys(myInfo));               // It returns array of Keys
console.log("Values : ", Object.values(myInfo));           // It returns array of Values
console.table(myInfo);                                     //Prints in Tabular Form

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
  
  udemy.buyCourse("  React JS     ",  449)
  udemy.buyCourse("  Angular JS   ",  449)
  udemy.buyCourse("  Node JS      ",  550)
  udemy.myCourses()