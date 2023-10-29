//Create copy for primitives
let data = 10;

let copyData = data;

//modify data
data = 200;

console.log("data is ",data);
console.log("copy is ",copyData);


//Creating copy for non-primitives
let obj = {
    a:10,
    b:20
}
//wrong approach
// let copyObj = obj; //address is copied, not an actual obj

// let copyObj = Object.assign({},obj)
let copyObj = {...obj} //spread operator (spread and Object.assign only copies outer obj)

//that is why we use this func -> JSON.parse(JSON.stringify(data))

//modify obj
obj.a = 30;

console.log("obj is ",obj);
console.log("copy is ",copyObj);