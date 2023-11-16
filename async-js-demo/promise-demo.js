// You promise to your frnd to call him in next 5min

console.log("you promise to your frnd that you call him in next 5 min...");
console.log("Your frnd is awaiting for your call.....");

let futureCondition = true;// condition through which future is being decided

//Create promise
    // let testPromise = new Promise((fullFilled, rejected)=>{})
    let phoneCallPromise = new Promise((fulfilled, rejected)=>{
        setTimeout(()=>{
            if(futureCondition===true)
            {
                fulfilled('Hello.. frnd')
            } else{
                rejected('Sorry frnd.. call you later')
            }
        },5000);
    })

//Consume promise(Your Frnd)
    phoneCallPromise // then when catch fulfilled
    .then((successMessage)=>{console.log(successMessage)})
    .catch((errorMessage)=>{console.log(errorMessage);})


// console.log("The last action");