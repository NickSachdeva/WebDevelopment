const mongoose = require('mongoose');
const Review = require('./review');

const productsSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        require:true
    },
    img:{
        type:String,
        trim:true,
        default:'/images/product.jpg'
    },
    price:{
        type:Number,
        min:0,
        default:0
    },
    desc:{
        type:String,
        trim:true
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
})



//mongoose middleware function to delete all the associated reviews on a product
productsSchema.post('findOneAndDelete',async function (product) {
    if(data.review.lengh>0) {
        await Review.deleteMany({_id:{$in:product.reviews}});
    }
});

const Product = mongoose.model('Product',productsSchema);

module.exports=Product;