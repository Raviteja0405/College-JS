//declare a number array
let arr = [10, 20, 30, 40];
let names = ["ravi", "suman", "kiran"];
let data = [12, "ravi", true, 12.34]; // not preferred to store non- homogenous data into array.

//access elements
// console.log(data[0]);
// console.log(data[1]);
// console.log(data[2]);
// console.log(data[3]);
// console.log(data[4]); //undefined

// for (let index = 0; index < 4; index++) {
//   console.log(arr[index]);
// }

//Object
let student = {
  // all keys are string
  sno: 100,
  name: "ravi",
  age: 21,
  city: "hyd",
};
console.log(typeof student);

//access properties
console.log(student.age);
console.log(student.city);
console.log(student["name"]);
