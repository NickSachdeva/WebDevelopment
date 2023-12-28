const number = parseInt(process.argv[2]);

// function fizzBuzz(num) {

//     for(let i=1;i<=num;i++){
//         if(i%3==0 && i%5==0) {
//             console.log('fizzBuzz');
//         }
//         else if(i%3==0) {
//             console.log('fizz');
//         }
//         else if(i%5==0) {
//             console.log('buzz');
//         }
//         else{
//             console.log(i);
//         }
//     }


// }

// function fizzBuzzImproved(num) {
//     for (let i = 1; i <= num; i++) {
//         let str = '';
//         if (i % 3 == 0) {
//             str += 'fizz';
//         }
//         if (i % 5 == 0) {
//             str += 'buzz';
//         }
//         if (str == "") {
//             str += i;
//         }
//         console.log(str);

//     }
// }

function fizzBuzzOptimised(num) {
    let count3=1;
    let count5=1;

    for(let i=1;i<=num;i++) {
        let str="";

        if(count3===3) {
            str+='fizz';
            count3=0;
        }

        if(count5===5) {
            str+='buzz';
            count5=0;
        }
        if(str===""){
            str+=i;
        }

        console.log(str);
        count3++;
        count5++;
    }


}

// fizzBuzz(number);
// fizzBuzzImproved(number);
fizzBuzzOptimised(number);