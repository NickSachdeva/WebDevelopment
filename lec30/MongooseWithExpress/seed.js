// Dummy products file


const mongoose = require('mongoose');
const Product = require('./models/product');


const DUMMY_PRODUCTS = [
    {
        name:'Iphone',
        price:120000,
        desc:"The iphone is a line of smartphone desc that use Apple's ios mobile operating system"
    },
    {
        name:'MacBook',
        price:240000,
        desc:"The iphone is a line of smartphone desc that use Apple's ios mobile operating system"
    },
    {
        name:"Apple Watch",
        price:40000,
        desc:"The iphone is a line of smartphone that use Apple's ios mobile operating system"
    },
    {
        name:'Ipod',
        price:12000,
        desc:"The iphone is a line of smartphone that use Apple's ios mobile operating system"
    },
    {
        name:'Reebok shoes',
        price:10000,
        desc:"The iphone is a line of smartphone that use Apple's ios mobile operating system"
    }
]


async function seedDB() {
    
    await Product.insertMany(DUMMY_PRODUCTS);
    console.log("DB Seeded");
}

module.exports = seedDB;