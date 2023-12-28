const express = require('express');
const app = express();
const path = require('path');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// middleware to parse the data sent by the form
app.use(express.urlencoded({ extended: true,limit:'10mb', parameterLimit:'5000' }));
app.use(express.json({limit:'10mb'}));

app.get('/',(req,res)=>{

    res.render('index.ejs');
})


app.get('/user',(req,res)=>{
    res.send('Get Request');
    console.log(req.query);//data is send in string format

})

app.post('/user',(req,res)=>{

    res.send('Post Request');
    console.log(req.body);//body object in post request
})














app.listen(3000,()=>{
    console.log("Server running at port 3000");
})