const express = require('express');
const app = express();


// Routing------------------
app.get('/', (req, res) => {
    res.send('HOME ROUTE');
})

app.get('/cat', (req, res) => {
    res.send('<h1>Meooooowww</h1>');
})

app.get('/dog', (req, res) => {
    res.send('<h1>Wooof Wooof</h1>');
})

app.get('/user',(req,res)=>{
    res.send('hello from the user');
})

app.get('*',(req,res)=>{
    res.send('YOU ARE REQUESTING A WRONG URL....');
})






app.listen(3000, () => {
    console.log('Server At 3000');
})