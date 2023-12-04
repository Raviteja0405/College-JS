//access elements directly
let mainDiv = document.querySelector("div")
let para = document.querySelector('p')


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
