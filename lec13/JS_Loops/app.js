// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);

for(let i=1;i<=10;i++) {
    console.log(i);
}

// -----------------OR--------------
let i=1;
for(; i<=10;){
    console.log(i);
    i++;
}

// while(condition) {
//     statements;
// }

let j = 100;
while(j>=0) {
    console.log(j);
    j-=10;
}

for(let i=0;i<=5;i++) {
    for(let j=0;j<=5;j++) {
        if(i==j) {
            break;
        }
        console.log(i,j);
    }
}

const colors = ["Red", "Green", "Orange","Blue"];

let allcolors = "";

for(let color of colors) {
    allcolors+=color+" ";
    console.log(color);
}
console.log(allcolors);

const car = {
    name: "Audi",
    price: 200000,
    isDiskBrake: true,
}

for(let i in car) {
    console.log(i);   
}

for(let i in car) {
    console.log(`${i}----->${car[i]}`);
}

