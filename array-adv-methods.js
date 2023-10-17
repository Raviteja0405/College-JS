// let arr = [90, 34, -45, 67, 2, 567];

//get all elements less than 50(some condition)
//without filter method
// let res = [];
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     if(element<50){
//         res.push(element);
//     }
// }
// console.log(res);

//********************filter******************
// let res = arr.filter(function (element) {
//   return element < 50;
// });
//we simplify above using arrow functions
// let res = arr.filter((element) => element > 50 && element < 200);
// console.log(res);
//we cannot modify values in filter method, only for selection

// let res = arr.filter((element) => element+10); this will be ignored, will return same array


//**************map*************
// let newAr = arr.map((element) => element + 10);
// console.log(newAr);

//add 10 for elments that are less than 100 and 20 for elements above 100
// let newArr = arr.map((element) => {
//   if (element < 50) {
//     return element + 10;
//   } else if (element > 100) {
//     return element + 20;
//   } else {
//     return element;
//   }
// });
// console.log(newArr);

//iterate
// for : //element and index based operations
// for (let index = 0; index < arr.length; index++) {
//     console.log(ar[index]);
// }

// for-of : //just elment based
// for (const element of arr) {
//     console.log(element);
// }

//******************for each*****************
// arr.forEach((element, s) => console.log("element at index ",s ," is ", element));




//****************reduce****************
//reducing an array to a single number like sum of elements, max, min etc

//arr.reduce((accumulator,parameter)=>)//syntax
//accumulator stores the result of previous operation
//parameter is a normal parameter

let ar1 = [20, 500, 300]
//find sum of elements
let sum = ar1.reduce((x,y)=>x+y)//first 20 and 100 send as parameter i.e x and y then sum is calculated and from then, that sum is send as input for accumulator i.e x
console.log(sum);

//find big element
// let big = ar1.reduce((x,y)=>{
  //   if(x<y){
    //     return y;
    //   } 
    //   else{
      //     return x;
      //   } 
      // })
      // or 
      
let big = ar1.reduce((x,y)=> x<y?y:x)
console.log(big);

//find small element
let small = ar1.reduce((x,y)=> x>y?y:x)
console.log(small);



// *****************find**********************
// find 10
let res1 = ar1.find(element => element ===300)
console.log("search result: ",res1);

let index = ar1.findIndex(element => element == 10)
console.log(index);// returns -1 if not present

