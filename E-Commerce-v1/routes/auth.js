const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');





// router.get('/fakeuser',async(req,res)=>{

//     const user = {
//         email:'niksachdeva@gmail.com',
//         username:'nikhil'
//     }
//     const newUser = await User.register(user,'nikhil1234');

//     res.send(newUser); 

// })


router.get('/register', (req, res) => {


    res.render('auth/signup');
})


router.post('/register', async (req, res) => {
    try {
        const { username, password, email, role } = req.body;

        const user = new User({ username, email, role });
        const newUser = await User.register(user, password);

        req.login(newUser, function (err) {
            if (err) {
                return next(err);
            }
            req.flash('success', 'WELCOME to shopping app , you registered successfully');
            return res.redirect('/products');
        });
    }
    catch {
        req.flash('error','e.message');
        res.redirect('/register');
    }    
})


router.get('/login', (req, res) => {

    res.render('auth/login');
})

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failureFlash: true
    }), (req, res) => {

        req.flash('success', `Welcome Back!! ${req.user.username}`);
        
        let redirectUrl = req.session.returnUrl;
        
        // removing review string from url -> e.g = '/products/:id/review'
        // so that we can redirect to show page to add the review again
        if(redirectUrl && redirectUrl.indexOf('review')!==-1){
            redirectUrl = redirectUrl.split('/');
            redirectUrl.pop();
            redirectUrl = redirectUrl.join('/');
        }

        delete req.session.returnUrl;
        res.redirect(redirectUrl);
    });

router.get('/logout', (req, res) => {

    req.logout();
    req.flash('success', 'GoodBye!!');
    res.redirect('/products');
})











module.exports = router;