// Creating the Promise

// const p = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log()
//     },2000)
// })

const num = new Promise((resolve,reject)=>{
    const random = Math.floor(Math.random()*100000);
    if(random%2==0) {
        resolve(random);
    }
    else{
        reject(random);
    }
});

num.then((msg)=>{
    console.log("Promise Resolved with Number is even i.e: ",msg);
})
.catch((err)=>{
    console.log("Promise rejected with Number is Odd i.e: ",err);
})
.finally(()=>{
    console.log("DONE!");
});

// async - Await Syntax


async function fun() {
    if(true) {
        throw new Error("Something went Wrong");
    }
    return 100;
}

fun()
    .then((val)=>{
        console.log("Inside resolve");
        console.log(val);
})
    
    .catch((err)=>{
        console.log("Error: ", err.message);
    })
