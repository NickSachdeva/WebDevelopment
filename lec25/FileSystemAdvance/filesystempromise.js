
const fs = require('fs');
const path = require('path');

const f1 = path.join(__dirname, 'input1.txt');
const f2 = path.join(__dirname, 'input2.txt');

const f3 = path.join(__dirname, 'output.txt');

function readF1() {

    return new Promise((resolve,reject)=>{

        fs.readFile(f1,(err,data)=>{
            
            if(err) reject(err);
            
            resolve(data.toString().split('\n'));
        });

    });
}

function readF2() {
    return new Promise((resolve,reject)=>{
        fs.readFile(f2,(err,data)=>{

            if(err) reject(err);

            resolve(data.toString().split('\n'));
        });
    });
}


function writeF3(data) {
    return new Promise((resolve,reject)=>{

        fs.writeFile(f3,data,{encoding:'utf-8',flag:'w'},(err)=>{
            if(err) reject(err);

            resolve();
            
        })
    })
}

let ans = null;

readF1()
    .then((arr1)=>{
        // console.log(arr1);
        ans=arr1;
        return readF2();
    })
    .then((arr2)=>{
        // console.log(arr2);

        // merging th two array
        ans=ans.concat(arr2);

        // sorting the array in ascending order
        ans.sort((a,b)=>a-b);
        

        // joining the array to make a string to be written in output.txt
        ans=ans.join('\n');

        return writeF3(ans);
    })
    .then(()=>{
        console.log('Everything done');
    })
    .catch((err)=>{
        console.log('Something went wrong');
    });

