const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const {validateReview,isLoggedIn} = require('../middleware');

router.post('/products/:id/review',isLoggedIn,validateReview, async(req,res)=>{
    
   try{
    const {id} = req.params;
    // const {rating,comment} = req.body;
    const product = await Product.findById(id);

    const review = new Review({...req.body});

    product.reviews.push(review);
    
    
    await review.save();
    await product.save();
    
    req.flash('success','Added your review successfully');
    res.redirect(`/products/${id}`);
   }
   catch(err) {
        res.status(500).render('error',{err:e.message});
   }
});












module.exports = router;