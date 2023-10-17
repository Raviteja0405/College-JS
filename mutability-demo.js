//all primitives are immutable
let a = 10;
a + 20; //30 is calculated in some other memory location
console.log(a);
// when you try to change values it will create a new memory and discard previous

let wish = "good";
wish = wish + "luck"; //leave that memory location and change it's location
console.log(wish);

//all non-prim are mutable
let person = {
  name: "ravi",
  age: 20,
};
person.name = "vinay"; //same location.
console.log(person);
