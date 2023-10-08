// //function declaration to find sum of two numbers
// function findSumOfTwoNumbers(a, b) {
//   //business Logic
//   //console.log('Hello');
//   let sum = a + b;
//   return sum;
// }

// //call the function
// let result1 = findSumOfTwoNumbers(2,3);
// console.log(result1)

// let result2 = findSumOfTwoNumbers(123,5334);
// console.log(result2)

//function to compare two numbers
function findBig(x, y) {
  if (x > y) {
    return "x is big";
  } else if (x == y) {
    return "both are equal";
  } else {
    return "y is big";
  }
}
let res = findBig(3, 6);
console.log(res);

//function expression :-
let findSum = function (a, b) {
  //business Logic
  let sum = a + b;
  return sum;
};

let sum = findSum(12, 14);
console.log(sum);
