const fs = require('fs');

const data = 'Hello from file system';

// fs.writeFile('abc.txt',data,{
//     encoding:'utf-8',
//     flag:'w'
// },(err)=>{
//     if(err) throw err;
//     console.log('file written Successfully');
// })

const path = require('path');

const f1 = path.join(__dirname,'TextFiles','xyz.txt');//path of xyz.txt file in textfiles folder.

fs.readFile(f1,
            {encoding:'utf-8',flag:'r'},
            (err,data)=>{
                if(err) throw err;
                console.log(data.toString()); //toString is optional if encoding is written.
})



// console.log(__dirname); 
// console.log(process.cwd());