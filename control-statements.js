//compare two values
let a = 100;
let b = 100;

if (a > b) {
  // if block
  console.log("a is big");
} else if (a == b) {
  console.log("both are equal");
} else {
  // else block
  console.log("b is big");
}

//Switch Statements
// let choice = 4;

// switch (choice) {
//   case 1:
//     console.log("first case");
//     break;
//   case 2:
//     console.log("second case");
//     break;
//   case 3:
//     console.log("Third case");
//     break;
//   default:
//     console.log("Invalid Choice");
// }

//Arithmetic operations
let l = 10;
let m = 20;
let choice = 1;

switch (choice) {
  case 1:
    let sum = l + m;
    console.log("sum : ", sum);
    break;
  case 2:
    let diff = l - m;
    console.log("difference: ", diff);
    break;
  default:
    console.log("Invalid Choice");
}
