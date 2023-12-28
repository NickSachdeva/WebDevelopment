// const arr = process.argv;//path of index.js is stored in the form of array

// console.log(arr);

// const names = process.argv.slice(2);
// console.log(names);

// for(let name of names){
//     console.log(`hello from ${name}`);
// }

const num = parseInt(process.argv[2]);

function print(n){
    for(let i=1;i<=n;i++) {
        console.log(i);
    }
}
print(num);

console.log(process.cwd()); // process.cwd return the path of parent folder where current file is running.

