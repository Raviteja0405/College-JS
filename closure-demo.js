let a = 10;
function someFunction() {
  let b = 20;

  return function () {
    return a + b;
  };
}

let res = someFunction();
console.log(res());

//closure - a function + its surrounding data