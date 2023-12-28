const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');





app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

let comments = [
    {
        id: uuid(),
        username: 'nikhil',
        text: 'Nice Product go for it!!!!'
    },
    {
        id: uuid(),
        username: 'ansh',
        text: 'bad Product1 dont go for it!!!!'
    },
    {
        id: uuid(),
        username: 'seema',
        text: 'bad Product2 dont go for it!!!!'
    },
    {
        id: uuid(),
        username: 'naresh',
        text: 'Nice Product3 go for it!!!!'
    }
]



app.get('/', (req, res) => {
    res.send('Connected');
})

// List all the comments
app.get('/comments', (req, res) => {
    res.render('index', { comments });
})

//Get the form for new comment
app.get('/comments/new', (req, res) => {
    res.render('new');
})

// creating a new comment
app.post('/comments', (req, res) => {

    const { username, text } = req.body;

    comments.push({ id: uuid(), username, text });

    res.redirect('/comments');

})

// Displaying a particular comment
app.get('/comments/:commentid', (req, res) => {
    // console.log(req.params);
    const { commentid } = req.params;

    const foundComment = comments.find((comment) => comment.id === commentid);

    // console.log(foundComment);

    res.render('show', { comment: foundComment });//this is the way of renaming

})

// Edit a comment using an id
app.get('/comments/:commentid/edit', (req, res) => {

    const { commentid } = req.params;

    const foundComment = comments.find((comment) => comment.id === commentid);

    res.render('edit.ejs', { foundComment });


})

// Updating the comment text
app.patch('/comments/:commentid', (req, res) => {

    const { commentid } = req.params;

    const foundComment = comments.find((comment) => comment.id === commentid);
    
    // console.log(req.body); //edited text in body
    // console.log(foundComment);

    const {text} = req.body;
    foundComment.text=text;

    res.redirect('/comments');
})

// Deleting a comment
app.delete('/comments/:commentid',(req,res)=>{

    const {commentid} = req.params;

    const newCommentsArray = comments.filter((comment)=> comment.id !==commentid);

    comments = newCommentsArray;

    res.redirect('/comments');
})















app.listen(8000, () => {
    console.log("server started at port 8000");
})