const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const {validateProduct, isLoggedIn} = require('../middleware');


router.get('/products', async (req, res) => {

    try {
        const products = await Product.find({});

        res.render('products/index', { products });
    }
    catch (e) {
        res.status(500).render('error', { err: e });
    }
});

router.get('/products/new', isLoggedIn,(req, res) => {
    
    try {
        res.render('products/new');
    }
    catch (e) {
        res.status(500).render('error', { err: e });
    }
})



router.post('/products',isLoggedIn,validateProduct,async (req, res) => {
    try {
        const { name, img, price, desc } = req.body;

        await Product.create({ name, img, price: parseFloat(price), desc });
        req.flash('success','Successfully added a new product!');
        res.redirect('/products');
    }
    catch (e) {
        res.status(500).render('error', { err: e });
    }

})

router.get('/products/:id',isLoggedIn, async (req, res) => {

    try {
        const { id } = req.params;

        const product = await Product.findById(id).populate('reviews');

        console.log(product);

        res.render('products/show', { product });
    }
    catch (e) {
        res.status(500).render('error', { err: e });
    }

})

router.get('/products/:id/edit', async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        res.render('products/edit', { product });
    }
    catch (e) {
        res.status(500).render('error', { err: e });
    }

})

router.patch('/products/:id', isLoggedIn,validateProduct, async (req, res) => {

    try {
        const { id } = req.params;
        const { name, img, price, desc } = req.body;

        await Product.findByIdAndUpdate(id, { name, img, price, desc });
        req.flash('success','edit your product successfully!');
        res.redirect(`/products/${id}`);
    }
    catch (e) {
        res.status(500).render('error', { err: e.message });
    }


});

router.delete('/products/:id',isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findById(id);

        // not a good practice
        // for(let id of product.reviews) {
        //     await review.findByIdAndDelete(id);
        // }


        await Product.findByIdAndDelete(id);

        res.redirect('/products');
    }
    catch (e) {
        res.status(500).render('error', { err: e.message });
    }

});












module.exports = router;