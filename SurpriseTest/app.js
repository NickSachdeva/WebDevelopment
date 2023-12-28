const radii = [2, 3, 1, 4, 6, 7, 8];
function area(radii) {
    const ans = [];
    for (let radius of radii) {
        ans.push(Math.PI * radius * radius);
    }
    return ans;
}

console.log(area(radii));

const sentence = "The blue fox jumps over a white lazy dog";
function reverseWords(sentence) {
    const ans = sentence.split(" ").reverse().join(" ");
    return ans;
}

console.log(reverseWords(sentence));

const num = 34125;
function countDigit(n) {
    const ans = n.toString().length;
    return ans;
}

console.log(countDigit(num));

const str = "Hello World";
function countVowels(str) {
    const ans = str.match(/[aeiou]/gi).length;
    return ans;
}

console.log(countVowels(str));

const numsArr = [49, 64, 81, 16, 50, 30];
function squareRoot(num) {
    const ans = [];
    for (let i = 0; i < num.length; i++) {
        ans.push(Math.sqrt(num[i]));
    }
    return ans;
}

console.log(squareRoot(numsArr));

const message = "Hello World";
function getFrequency(string) {
    var freq = {};
    for (var i = 0; i < string.length; i++) {
        var character = string.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
}

console.log(getFrequency(message));

const list = [1, 2, 3, "3476", 6, "43874", "2178832"];
function sumOfNumberElement(list) {
    let ans = 0;
    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === "string") {
            continue;
        }
        else {
            ans = ans + list[i];
        }

    }
    return ans;
}

console.log(sumOfNumberElement(list));

const number = 376347;
function sumOfEvenDigit(num) {
    var ans = 0;
    while (num > 0) {
        const rem = num % 10;
        if (rem % 2 === 0) {
            ans = ans + rem;
        }
        num = parseInt(num / 10);
    }
    return ans;
}

console.log(sumOfEvenDigit(number));

// ---------------------Capitalize the first letter of each word

const str1 = "The blue fox jumps over a white lazy dog";
function capitalize(str) {
    const s=str.split(" ");
    for(let word of str) {

    }
}

// -----------------flattening the array----------


const myArr = [[1, 2], [3, 4, 5], ["Hello", true], [5, [true, false]], 99, 100];
function flatterArray(arr) {
   const ans=[];
   for(let el of arr) {
    if(Array.isArray(el)){
        ans.push(...el);
    }
    else{
        ans.push(el);
    }
   }
    return ans;      
}

console.log(flatterArray(myArr));