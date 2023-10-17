// //function declaration
// function test1(a) {
//   return a;
// }

// //function expression
// let test2 = function (a) {
//   return a;
// };

//arrow function(simple syntax for function expression)
//arrow function is useful when there is only one line of code inside the function

// let test3 = (a)=>{
//     return a;
// };

//we write above one as

let test3 = (a) => a;

// console.log(test1(100));
// console.log(test2(200));
// console.log(test3(300));
// console.log(typeof test3);


// test1.x = 200;
// console.dir(test1)

//Functions are also called callable objects(special obj)

// Functions are "First Class Objects"
//     A function can be stored in a variable
let a = function(){};

//     A function can send as arg
function test(x){
    console.log(x());
}
test(function(){return "arg function";})//callback function is a func that send as arg to another function

//     A function can return another function
function someFunction(){
    return function(){
        return "inner function"
    };
}

let res = someFunction();
console.log(res());