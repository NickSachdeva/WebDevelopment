const fs = require('fs');
const path = require('path');

const f1 = path.join(__dirname, 'input1.txt');
const f2 = path.join(__dirname, 'input2.txt');

const f3 = path.join(__dirname, 'output.txt');

fs.readFile(f1, (err, data) => {
    const arr1 = data.toString().split('\n');
    // console.log(arr1);

    fs.readFile(f2,(err,data)=>{
        const arr2 = data.toString().split('\n');
        // console.log(arr2);

        //Merge 2 arrays
        let ans = arr1.concat(arr2);

        //sort in ascending order
        ans.sort((a,b)=>a-b); 

        ans=ans.join('\n');
        // console.log(typeof ans);

        fs.writeFile(f3,ans,{encoding:'utf-8',flag:'w'},(err)=>{
            if(err) throw err;
            console.log('file successfully merged');
        })


    })
})