//access elements directly
let mainDiv = document.querySelector("div")
let para = document.querySelector('p')
let delBtn = document.querySelector('button')

//access children of a parent
console.log(document.body.children);
// childNodes returns all the elements-> text, comments etc
// Children returns children only

console.log(mainDiv.children); //returns an html collection
// mainDiv.children[0] is also possible


//access children of a parent
console.log(mainDiv.lastElementChild); //ul
console.log(mainDiv.children.item); //not useful
console.log(mainDiv.children[2].children);

//access parent
console.log(mainDiv.parentElement); //returns it's parent
console.log(para.parentElement);

//access siblings
console.log(para.nextElementSibling);
console.log(para.previousElementSibling);


// add image to div
let img = document.createElement ("img")
img.src = "https://media.istockphoto.com/id/1439425791/photo/digital-technology-software-development-concept-coding-programmer-working-on-laptop-with.webp?b=1&s=170667a&w=0&k=20&c=c0Q8u1Y5yFJCDxltBZd0RAn1g01Se6qCjZGS5q9XLZs="
// console.log(img);
img.style.width = "400px"
// img.setAttribute('class','rounded-circle')
// mainDiv.appendChild(img); // append as last child of parent
// mainDiv.prepend(img) //before element
img.className = 'rounded-circle'

// mainDiv.before(img)
mainDiv.after(img)


//create h1
let h1 = document.createElement('h1')
h1.textContent = "Welcome to DOM"
h1.setAttribute('class', 'display-2 text-danger text-center bg-warning')
mainDiv.prepend(h1)

// Remove element 
// remove()
// removeChild(child)

delBtn.addEventListener('click',()=>{
    // mainDiv.remove() // main div will be removed
    // mainDiv.removeChild(mainDiv.lastElementChild);
})