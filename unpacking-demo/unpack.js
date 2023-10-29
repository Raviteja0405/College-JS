//pack data
let marks = [90, 40, 50, 60, 70];
let person = {
  firstName: "kiran",
  lastName: "babu",
  age: 23,
};

//unpack data
for (const v of marks) {
  console.log(v);
}

for (const k in person) {
  console.log(person[k]);
}

//unpack in modern way(destructuring)

//destructuring an array => variable name your choice
let [a, b, c, d] = marks;
// console.log(a, b, c, d);


//destructuring an obj => variable name is properties
let {firstName,lastName,age} = person;
console.log(firstName);