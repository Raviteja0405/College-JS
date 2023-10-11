//Inheritance

//parent
let obj1 = {
    a: 10
}

//child
let obj2 = {
    b: 20
}

//set obj1 as parent to obj2
Object.setPrototypeOf(obj2, obj1)
//all the properties of obj1 are available to obj2


// console.log(obj1.a);
// console.log(obj2.b);
// console.log(obj1.b);
// console.log(obj2.a);

console.log(obj2.a);
console.log(obj2.b);
console.log(obj1.a);
console.log(obj1.a);
console.log(obj1.b);