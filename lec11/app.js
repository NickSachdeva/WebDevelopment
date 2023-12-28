// const num = prompt("Enter a number");
// if (num % 2 == 0) {
//     console.log("Even");
// }
// else {
//     conmsole.log("Odd");
// }

// const age = parseInt(prompt("Enter your age"));
// if (age < 18) {
//     console.log("You cannot enter and drink");
// }
// else if (age >= 18 && age < 25) {
//     console.log("your can enter but cannot drink");
// }
// else {
//     console.log("Enter and Drink");
// }

// const arr = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// const a = prompt("Enter Month");
// console.log(arr[a]);

// const month = 1;
// switch(month) {
//     case 1: console.log("Jan");
//             break;
//     case 2: console.log("Feb");
//             break;
//     case 3: console.log("Mar");
//             break;
// }
    

const local = prompt("Enter dish name");

if(local.toLowerCase().includes("chicken") || local.toLowerCase().includes("egg")){
    console.log("Non-Veg Dish");
}
else{
    console.log("Veg Dish");
}
