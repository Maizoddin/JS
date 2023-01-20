// create
let comb = new Map();

// set()
comb.set("name","Maaz");

// get()
comb.get("name");

// has()
comb.has("name");

// delete()
// comb.delete("name");

// clear()
// comb.clear();

// size
console.log(comb.size);


// keys()
console.log(comb.keys()); 

// values()
console.log(comb.values());

// entries
console.log(comb.entries());

// forEach()
comb.forEach((value,key) => {console.log(`Key : ${key} and Value : ${value}`)});

// for of
for (let val of comb){
    console.log("Value :",val);
}
