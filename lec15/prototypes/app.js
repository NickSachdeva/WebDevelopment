// Mechanism using which we can imlement inheritance in JS.

const person = {
    name: kartik,
    age:25,
    isAdult: true,
}

let p1 = Object.create(person);
let p2 = Object.create(p1);//p2----->empty objects but still we can access name , age and isadult because of prototypes.
  

