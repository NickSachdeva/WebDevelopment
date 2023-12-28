console.log('hello from nodejs');

const pi = 3.14;

let magicNum = 37;

console.log(pi);
console.log(magicNum);

function square(num) {
    return num*num;
}

console.log(square(8));

const person = {
    firstName:'Nikhil',
    lastName:'Sachdeva',
    age:22,
    shoutFullName: function() {
        return `Hello from ${this.firstName} ${this.lastName}`;
    }

}
console.log(person.firstName);
console.log(person['last'+'Name']);
console.log(person.shoutFullName());

const fruits = ['apple', 'grapes', 'oranges', 'Mangoes'];

for(let fruit of fruits) {
    console.log(fruit);
}


const arr = [1,2,3,4,5];

const cube = num => num*num*num;

const cubes = arr.map(cube);

console.log(arr);
console.log(cubes);
