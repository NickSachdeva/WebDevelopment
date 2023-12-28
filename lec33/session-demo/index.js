const express = require('express');
const app = express();
const session = require('express-session');



app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));





app.get('/', (req, res) => {

    res.send('hey there!!');
});

//to count how many times a user visit the page
app.get('/viewcount', (req, res) => {

    if (req.session.count) {
        req.session.count += 1;
    }
    else {
        req.session.count = 1;
    }

    res.send(`you visited the page ${req.session.count} times`);
})

app.get('/setname',(req,res)=>{
    req.session.username = 'Nikhil';

    res.redirect('/greet');
});

app.get('/greet',(req,res)=>{
    const {username='Anonymous'} = req.session;

    res.send(`hello from ${username}`);
})














app.listen(2323, () => {
    console.log('Server started at port 2323');
})