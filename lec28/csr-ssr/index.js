const express = require('express');
const app = express();
const path = require('path');



app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));

const todos = ["Go to gym","buy groceries","watch movies","Go to shopping"];


app.get('/todos',(req,res)=>{
    if(req.xhr) {
        console.log('AJAX REQUEST');
        res.json(todos);
    }
    else{
        console.log('NORMAL REQUEST');
        res.render('todos',{todos});
    }
    
});


app.post('/todos',(req,res)=>{
    
    try{
        const { todo } = req.body;
    todos.push(todo);
    res.status(200).json({msg:'todo added successfully'});
    }
    catch(e)
    {
        res.status(400 ).json({msg:'something went wrong'});
    }
})


















app.listen(3000,()=>{
    console.log("Server started at port 3000");
})