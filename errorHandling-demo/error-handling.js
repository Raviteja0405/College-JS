console.log("first");
console.log("second");
try{
    console.log("third");
}
catch(err){
    console.log(err);
}
console.log("fourth");

function test() {
    console.log("test called");
}
test()

//creat your own error handling mechanism by using
// try{
//     ...
// }
// catch(err){
//     ...
// }
