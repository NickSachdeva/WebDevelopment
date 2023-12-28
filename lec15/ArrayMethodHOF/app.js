// ----------------------------Map---------------------------

// const nums = [1,2,3,4,5,6];

// function square(num) {
//     return num**2;
// }

// const squareOfNums = nums.map(square);
// console.log(squareOfNums);

// function sqrt(numb) {
//     return numb**(1/2);
// }

// const sqrtOfNumb = squareOfNums.map(sqrt);

// console.log(sqrtOfNumb);

 const arr = [['name', 'abc'],['age',23],['favcolor','blue']];


const ans = arr.map((el)=>{
    return {[el[0]] : el[1]}
});
console.log(ans);

// --------------------------------filter--------------------------------

const nums = [1,2,3,4,5,6,7,8,9,10];

function isEven(num) {
    return num%2==0;
}

const even_numbers = nums.filter(isEven);
console.log(even_numbers);

// ----------------------------------------------------------------------


const menu = [
    {
        name:"Kadhai Paneer",
        price:100
    },

    {
        name:"Aalo Gobhi",
        price:200
    },
    {
        name:"Garlic Bread",
        price:300
    },
    {
        name:"Egg curry",
        price:500
    },
    {
        name:"Onion Parantha",
        price:300
    },
    {
        name:"Chicken Briyani",
        price:900
    }
]

const jainMenu = menu.filter((el)=>{
    return !(el.name.includes("Chicken") || el.name.includes("Onion") || el.name.includes("Egg"));
})

console.log(jainMenu);

const sumOfPrice = menu.reduce((sum,food)=>{
    return sum+food.price;
},0);

console.log("sumOfPrice: ",sumOfPrice);

// ---------------------------reduce-------------------------------

// const sum = nums.reduce((sum, val) => {
//     return sum + val;
// }, 0);

// console.log(sum);

// function callback(sum, food) {
//     return sum + food.price;
// }

// const totalAmount = menu.reduce(callback, 0);

// console.log(totalAmount);

// const arr1 = [[1, 2, 3], [4, 5], [6, 7, 8]];

// // [1,2,3,4,5,6,7,8]

// const res1 = arr1.reduce((accumulator, val) => {
//     return accumulator.concat(val);
// }, [])

// console.log(res1);

// ------------------------------------sort-----------------------------------

const array = [10,2,3,1,8,5,4,99];
array.sort((a,b)=>a-b);
console.log(array);

menu.sort((food1,food2)=>food1.price-food2.price);
console.log(menu);

// --------------------------------find---------------------------

// const nums = [100, 200, 300, 400];

// const ans = nums.find((num) => {
//     return num === 200;
// });

// const eggCurry = menu.find((food) => food.name === 'Egg Curry');
// console.log(eggCurry);

// -------------------------------some-----------------------------

const isEggCurryPresent = menu.some((food) => food.name === 'Chicken Curry');

console.log(isEggCurryPresent);