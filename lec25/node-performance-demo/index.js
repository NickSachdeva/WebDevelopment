const express = require('express');

const app = express();

// const response = {
//     responseCode: 200,
//     products: [
//         {
//             id: 1,
//             name: 'MacBook'
//         },
//         {
//             id: 2,
//             name: 'Iphone'
//         }
//     ]
// }

app.get('/', (req, res) => {
    res.send('Meeooww');
})

app.get('/cat', (req, res) => {
    res.send('Meeooww2');
})

app.get('/dog', (req, res) => {
    res.send('Meeooww3');
})

app.get('/lion', (req, res) => {
    res.send('Meeooww4');
})

app.listen(3000);