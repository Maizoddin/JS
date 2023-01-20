// creating new set
let hashSet = new Set();
// OR
// let hashSet = new Set([1,2,3,4])

// add()
hashSet.add(20);

// delete()
// hashSet.delete(20);

// clear()
// hashSet.clear();

// has()
hashSet.has(20);
// true

// size
console.log(hashSet.size);

// for of
for (let val of hashSet){
    console.log(val);
}

// forEach
hashSet.forEach(num => console.log(num*num));