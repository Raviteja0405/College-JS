// You promise to your frnd to call him in next 5min

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

//Consume promise