// let emp = {
//   eno: 100, // property -1
//   name: "ravi", // property -2
// };
// // console.log(emp);
// // console.log(typeof emp)

// // //Access properties
// // console.log(emp.name);
// // console.log(emp['eno']);
// // console.log(emp.city);

// //iterate obj(for in loop)

// // for(let x in emp){
// //     console.log('value of',x, 'is',emp[x])
// // }

// //Insert new property
// emp.city = "hyd";
// console.log(emp);

// //update a property
// emp.name = "ravi kumar";
// console.log(emp);

// //delete property
// // delete emp.eno;
// // console.log(emp);

// //delete all other exept one
// for (let key in emp) {
//     if(key !== 'eno'){
//         delete emp[key];
//     }
// }
// console.log(emp);

//Complex Objects
// if values not only primitives, then they are complex
// let student = {
//   sno: 100,
//   name: "Suresh",
//   marks: [90, 78, 68],
//   address: {
//     street: "kphb",
//     pincode: 555555,
//     city: "hyd",
//   },
//   getAverage: function () {
//     //to process properties of this object
//     let avg = (this.marks[0] + this.marks[1] + this.marks[2]) / 3;
//     return avg;
//   },
// };

// console.log(student.getAverage());
// console.log(student.address.street);
// console.log(student.marks.length);

//Can we create multiple objects of same type?
//yes!

//We use constructor Functions
//Create person type

//2. Create objects of Person type

// function Person(id, name, age){
//   //object initialization logic
//   this.id = id,
//   this.name = name,
//   this.age = age;

//    methods
    // getName(){
    //   return this.name;
    // }
// }

//Latest => constructor method
class Person {
  constructor(id, name, age) {
    //object initialization logic
    this.id = id,
    this.name = name, 
    this.age = age;
  }
}

Person.prototype.getName = function(){
  return this.name;
};

//2. Create objects of Person type
let person1 = new Person(100, "Ravi", 21);
console.log(person1);

let person2 = new Person(200, "Bhanu", 22);
console.log(person2.getName());

//Another Object
// function Emp(id, name, basic,skills, address ){
//   this.id = id;
//   this.name = name;
//   this.basic = basic;
//   this.skills = skills;
//   this.address = address;
// }


class Emp{
  constructor(id, name, basic, skills, address){
    this.id = id;
    this.name = name;
    this.basic = basic;
    this.skills = skills;
    this.address = address;
  }
}

// Salary = basic + hra(15% of basic) + da(10% of basic)
// Method to find getSalary
Emp.prototype.getSalary = function(){
  //find HRA
  let hra = 0.15*this.basic;
  let da = 0.1*this.basic;
  let salary = this.basic+hra+da;
  return salary;
}

let emp1 = new Emp(100, 'ram', 10000, ['javascript','programming'], {
  city: 'hyd',
  pincode : 333333
})
console.log(emp1);