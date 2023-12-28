
function fun() {
    var a=200;
    return function() {
        console.log(++a);
    }
}

const f = fun();

f();