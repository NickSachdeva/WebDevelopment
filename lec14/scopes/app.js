
// scopes-----> let, const(ES6-ecma script 6), var (older way)

// let a=10;
// let b=20;
// if(a>5) {
    // let b=500;
    // console.log(b);------> 500
// }

// console.log(b);------> 20



// var a=100;

// if(a>10) {
//     var a=99;
//     console.log(a);------>99
// }
// console.log(a);------>99
 
 

var a = 100;
var b = 200;
var c = a + b;  
var d = 100;

function fly() {
    var d = 300;
    var e = 500;
    console.log(d);//------->300
}

fly();
console.log(e);//------>e is not defined
console.log(d);//------>300  
console.log(c);


// var x = 99;

// if (true) {
//     var x = 88;
//     console.log(x);
// }

// console.log(x);

// let a = 20;
// let b = 30;

// if (true) {
//     let a = 80;
//     let b = 90;
//     console.log(a);
//     console.log(b);
// }

// console.log(a);
// console.log(b);