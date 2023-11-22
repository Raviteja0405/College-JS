// let input = document.querySelector("#username")
// let btn = document.querySelector("button")

// btn.addEventListener("click",()=>{
//     //read data from input field
//     let username = input.value;
//     // console.log(username);
//     //create h1 element
//     let h1 = document.createElement('h1')
//     //add text content
//     h1.textContent = username;
//     //append
//     document.body.appendChild(h1);
// })

let first = document.querySelector("#first")
let second = document.querySelector("#second")
let addBtn = document.querySelector(".add")
let subBtn = document.querySelector(".sub")
let res = document.querySelector(".result")
res.style.fontSize = "100px"
let fn,sn;

function getValues(){
    fn = Number(first.value);
    sn = Number(second.value);
}
addBtn.addEventListener("click",()=>{
    getValues();
    let sum = fn+sn;
    res.textContent = sum;
});
subBtn.addEventListener("click",()=>{
    getValues();
    let sub = fn-sn;
    res.textContent = sub;
});