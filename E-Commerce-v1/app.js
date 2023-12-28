const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');


mongoose.connect('mongodb://127.0.0.1:27017/Shopping-App')
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => {
        console.log('something went wrong');
        console.log(err);
    });


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/',(req,res)=>{
    res.render('home');
})


const sessionConfig = {
    secret: 'weneedsomebettersecret',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7 * 1,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 1
    }
}

// seedDB();

app.use(session(sessionConfig));
app.use(flash());
//to make things available globaly
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})


// Initialising middlewares for passport
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// telling the passport to check for username and password using authenticate method provided by the passport local mongoose package
passport.use(new LocalStrategy(User.authenticate()));




//Routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');
const authRoutes = require('./routes/auth');



app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);
















const port = 5000;
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})