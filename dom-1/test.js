// //Access elements from html

// //Access head
// // let headElement = document.head;
// // console.log(headElement);

// //Access body
// // let bodyElement = document.body;
// // console.log(bodyElement);

// //Access other elements
// // h1
// // let h1 = document.getElementById("heading");
// // console.log(h1);

// // let h1a = document.getElementsByTagName("h1")
// // console.log(h1a);

// // let h1b= document.querySelector("#heading")
// // console.log(h1b);

// // let div = document.querySelector(".main")
// // console.log(div);

// // let h1b= document.querySelectorAll("h1")
// // console.log(h1b);

// //Access
// //get h1 element
// let heading = document.querySelector("#heading");
// console.log(heading);
// let btn = document.querySelector("button");
// let img = document.querySelector("img");
// let div = document.querySelector(".main")

// //attach event listener to button
// btn.addEventListener("click",()=>{//click, mouseover
//     //change content
//     heading.textContent = "hello";
//     //change styles
//     heading.style.color = 'white'
//     heading.style.backgroundColor = 'green'
//     //change img
//     img.src = "https://images.unsplash.com/photo-1562575214-da9fcf59b907?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D";
//     img.style.width = "400px";
// })

// // add h2 and p element to div
// // div.innerHTML = `<h2>Heading-2</h2>
// // <p>This is a paragraph</p>`; //previous values will get vanished this way

// div.innerHTML = div.innerHTML+`<h2>Heading-2</h2>
// <p>This is a paragraph</p>`;

let main = document.querySelector(".main");
let btn = document.querySelector("button.add");
let table = document.querySelector('table')
let toggleBtn = document.querySelector(".toggle");

btn.addEventListener("click", () => {
  // main.innerHTML = main.innerHTML + `<p>paragraph</p>`//This is will only once after click

  //create new para
  let para = document.createElement("p");
  //set id attribute
  para.setAttribute("id","para")

  //add content to para
  para.textContent = "paragraph";
  //append to main element
  main.appendChild(para);
});

//array of emps
let emps = [
  { eno: 100, name: "ravi", age: 21, city: "hyd" },
  { eno: 102, name: "suresh", age: 42, city: "ban" },
  { eno: 103, name: "bhanu", age: 35, city: "mum" },
  { eno: 104, name: "vikas", age: 23, city: "del" },
  { eno: 106, name: "manasa", age: 47, city: "kan" },
  { eno: 107, name: "keerthi", age: 12, city: "coc" },
];

//get tbody
let tbody = document.querySelector("tbody");
for (const iterator of emps) {
  tbody.innerHTML +=
    `<tr>
        <td>${iterator.eno}</td>
        <td>${iterator.name}</td>
        <td>${iterator.age}</td>
        <td>${iterator.city}</td>
    </tr>`;
}


toggleBtn.addEventListener("click",()=>{
    if(table.hidden ===true){
        toggleBtn.textContent = "Hide Table"
        table.hidden = false;
        toggleBtn.style.backgroundColor = "pink";
    }else {
        table.hidden= true;
        toggleBtn.textContent = "Show Table"
    }
})