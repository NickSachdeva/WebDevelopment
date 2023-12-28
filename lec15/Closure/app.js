// Closure----> function abundend with its lexical environment is closure.

function a() {
    let x=100;
    function b() {
        x++;
        console.log(x);
    }
    return b;
}

const f = a();
f();
f();
f();
f();