function fun() {
    console.log("Inside Fun Function");
}

fun();

function si(p, r, t) {
    const ans = (p * r * t) / 100;
    return ans;
}

function fact(n) {
    if (n == 1) {
        return n;
    }
    const ans = n * fact(n - 1);
    return ans;
}

function ncr(n, r) {
    const ans = fact(n) / (fact(r) * fact(n - r));
    return ans;
}


console.log(si(100, 2, 10));

console.log(fact(1));

console.log(ncr(3, 2));

// Anonymus function
const f = function() {
    console.log("Inside function");
}
console.log(f);
f();


// ----------------------------------------
let x=100;
function fun() {
    var y = 99;
    console.log("Inside Fun");
    console.log(y);
}

console.log(x);
fun();
