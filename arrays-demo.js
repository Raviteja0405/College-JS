let arr = [10, 20, 30];
// console.log(arr.length);
// console.log(typeof arr);

// console.log(arr[0]);

// // ITERATION An array
// for(let i = 0;i<arr.length;i++){
//     console.log(`The element at ${i} is ${arr[i]}`);
// }

console.log(arr);

// Insert at Start
let len = arr.unshift(1, 2, 5);
console.log("new array is ", arr, "and the length is ", len);

//Insert at end
let len1 = arr.push(12);
console.log("new array is ", arr, "and the length is ", len1);

//Insert at between(index based insertion)
arr.splice(2, 0, 123);// from 2 index, 0 deletion, add next;
console.log('new array is ',arr);

//Remove elements
//Start
let rm1 = arr.shift();
console.log('new array is ', arr, 'and removed element is ', rm1);

//end
let rm2 = arr.pop();
console.log('new array is ', arr, 'and removed element is ', rm2);

//index based
let rm3 = arr.splice(2,1)
console.log('new array is ', arr, 'and removed element is ', rm3);
// from index 2 delete 1 element=> it returns an array of elements

//updating
let rm4 = arr.splice(2,2,111) //it will replace that place with 123
console.log('new array is ', arr, 'and removed element is ', rm4);