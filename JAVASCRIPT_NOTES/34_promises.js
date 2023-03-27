// Promises
// Promise : Promise is an object that represents the eventual completion of an asynchronous operation. 
// It makes it easier to handle the result of asynchronous operation
// We can overcome with the issue of callback hell by attaching handlers to promises
// Example : if we are fetching data from an API then we can use promises and we can attach handlers to it, if data is fetched successfully then what to do and in case of failure what to do
// states : pending, resolve, reject

// --------------------------------------------------

// Example 1:
/* let cart = ["pant", "shirt", "kurta"]

function validateCart(cart){
  if (cart.length > 0){
    return true;
  }else{
    return false
  }
}

function createOreder(cart){
  return new Promise(function(resolve, reject){
       if (validateCart(cart)){
         orderId = 123;
         setTimeout(function(){
          resolve(orderId)
         },2000);   
       }else{
         let err = new Error("Cart is not valid")
         reject(err);
       }
  })
}

function proceedToPayment(orderId){
  return new Promise(function(resolve, reject){
         if (typeof orderId == "number"){
           setTimeout(function(){
            resolve("Payment Successful")
           },1000)
         }else{         
           let err = new Error("Payment Failed")
           reject(err)
         }
  })
}

createOreder(cart)
 .then(function (orderId){
   console.log("OrderId : ",orderId)
   return orderId
  })
  .then(function(orderId){
    return proceedToPayment(orderId)
  })
  .then(function(status){
    console.log(status)
  })
  .catch(function (err){ 
    console.log(err.message)
   }) */

// -------------------------------------------------------------

// Example 2
/* 
function getWeather(){
  return new Promise(function (resolve,reject){
  let url = "https://api.openweathermap.org/data/2.5/weather?q=belgaum&appid=cb6a8db3dc95cfc650f3a7c766cb3f00"
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let temprature =((data.main.temp) - 273).toFixed(2)
    resolve(temprature)
  })
  .catch(()=>{
    let err = new Error("Error - 404")
    reject(err)
  })
  })    
}

getWeather()
.then((temp)=>{
  console.log("Temprature is :",temp)
})
.catch((err)=>{
  console.log(err.message)
})
*/

// -------------------------------------------------------------------------

//  Example 3
/*   function getWeather(){
    return new Promise(function(resolve, reject){
       let weather = "cloudy";
       setTimeout(function(){
         resolve(weather)
       },1000)
    })
  }

  function getWeatherIcon(weather){
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        switch(weather){
          case "sunny":
            resolve("☀")
            break;
          case "cloudy":
            resolve("☁");
            break;
          case "rainny":
            resolve("☔")
            break;
          default:
            resolve("No Icon Found")
        }
      },1000)
    })
  }

  getWeather()
  .then((data) => {
    console.log(data);
    return getWeatherIcon(data)
  })
  .then((data)=>{console.log(data)})
  .catch((err) => {console.log(err.message)}) */

