const express = require('express');
const app = express();



app.get('/',(req,res)=>{
    
    res.send('ROOT PATH');
});

//req.params = :subredit
app.get('/r/:subredit',(req,res)=>{
    
    // console.log(req.params);
    const {subredit} = req.params;
    res.send(`<h1>This is ${subredit} subredit</h1>`);
});


app.get('/user/:userid/comments/:commentsid',(req,res)=>{

    console.log(req.params);
    res.send('USER ROUTE');
});

app.get('/search',(req,res)=>{

    // console.log(req.query);
    const {q}= req.query;
    res.send(`YOU ARE IN SEARCH ${q}`);
});

app.get('/product/:productid',(req,res)=>{

    console.log(req.params);
    console.log(req.query);
    res.send("PRODUCT PAGE");
});

















app.listen(8080,()=>{
    console.log('server started at port 8080');
})