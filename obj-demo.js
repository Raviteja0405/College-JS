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
let student = {
    sno: 100,
    name: 'Suresh',
    marks:[90, 78, 68],
    address:{
        street: 'kphb',
        pincode: 555555,
        city: 'hyd'
    },
    getAverage: function(){
        //to process properties of this object
        let avg = (this.marks[0]+this.marks[1]+this.marks[2])/3;
        return avg; 
    }
}

console.log(student.getAverage());
console.log(student.address.street);
console.log(student.marks.length);