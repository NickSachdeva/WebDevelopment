const express = require('express');
const app = express();

//console.log(app);

// app.use runs for each and every request no matter what it is
app.use((req,res)=>{
    // console.log(req);
    // console.log('you made an Request!!@');
    
    // res.send('YOU MADE THE REQUEST SUCCESSFULLY, AND THIS IS CORRESPONDING RESPONSE');
    res.send('<h1>This is html Heading Tag as a Response</h1>');
})




// app.get('/search',(req,res)=>{
//     const { searchItems = 'Nothing'} = req.query;
//     res.send(`Ypu are searching for ${searchItems}`);
// });

// app.get('/', (req, res) => {
//     res.send('Meeooww.....');
// })





// if you want your app to listen some request, so to start the server at some port(3000)-->
app.listen(3000,()=>{
    console.log('server started at port 3000')
})

// nodemon tool- dev dependency-- used while development of application, it automatically restart the app to reflect the changes.