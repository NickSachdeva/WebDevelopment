const express = require('express');
const app = express();
const path = require('path');


// process.cws +'/views';---> views

// you are telling express that we will use ejs for creating templates
app.set('view engine','ejs'); //view engine to set template
app.set('views',path.join(__dirname,'views'));//to set full path of views so that we could run code from outside or able to find views
 

const products = [
    {
        id:1,
        name:'Iphone',
        imgUrl:'',
        desc:'Most expensive phone these days',
        price:'$1500'
    },
    {
        id:2,
        name:'MacBook',
        imgUrl:'',
        desc:'Most expensive phone these days',
        price:'$1500'
    },
    {
        id:3,
        name:'Apple Watch',
        imgUrl:'',
        desc:'Most expensive phone these days',
        price:'$1500'
    }
]

const todos = ["Go to gym","Buy Groceries","Learn React","Play Football"];



app.use(express.static(path.join(__dirname,'public')));//anytime the server send request, this public folder with css file will work.




app.get('/',(req,res)=>{
    
    res.send('Connected');
    //res.render('index');
})

app.get('/index', (req, res) => {
    res.render('index'); //to send ejs file as a response, we use 'render'
})

app.get('/products', (req, res) => {
    res.render('products', { products });
})

app.get('/random',(req,res)=>{

const randomNum = Math.floor(Math.random()*100);

    res.render('random',{randomNum});//to send response to random.ejs
})

app.get('/todos',(req,res)=>{
    res.render('todos',{todos});
})







app.listen(3000,()=>{
    console.log('server started at port 3000');
});