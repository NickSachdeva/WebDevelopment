const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');


app.use(cookieParser('this is not a good secret')); 


app.get('/',(req,res)=>{
    console.log(req.cookies);
    console.log(req.signedCookies);
    res.send(req.cookies);
    
});
  


app.get('/setcookie',(req,res)=>{
    res.cookie('mode','dark');
    res.cookie('location','new delhi');
    res.cookie('username','nikhil');
    res.send('sent u a cookie successfully');
})

app.get('/greet',(req,res)=>{

    const {username} = req.cookies;

    res.send(`hey there ${username}`);
})

app.get('/getsignedcookie',(req,res)=>{
    res.cookie('fruit','grapes',{signed:true});

    res.send('sent you a signed cookie');
})






 
app.listen(2323,()=>{
    console.log('Server started at port 2323');
})