const mongoose = require('mongoose');
const Product = require('./models/product');




const products = [

    {
        name:'Iphone 15',
        img:'https://images.unsplash.com/photo-1695048133021-be2def43f3b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:800,
        desc:'The all-new iPhone 15 Pro and iPhone 15. Learn more. Designed to make a difference. Get to know iPhone 15.'
    },
    {
        name:'Rebook Shoes',
        img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:100,
        desc:'The all-new iPhone 15 Pro and iPhone 15. Learn more. Designed to make a difference. Get to know iPhone 15.'
    },
    {
        name:'Apple Watch',
        img:'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:300,
        desc:'The all-new iPhone 15 Pro and iPhone 15. Learn more. Designed to make a difference. Get to know iPhone 15.'
    },
    {
        name:'Mac Book',
        img:'https://images.unsplash.com/photo-1514342959091-2bffd8a7c4ba?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:1200,
        desc:'The all-new iPhone 15 Pro and iPhone 15. Learn more. Designed to make a difference. Get to know iPhone 15.'
    },
    {
        name:'Drones',
        img:'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:2000,
        desc:'The all-new iPhone 15 Pro and iPhone 15. Learn more. Designed to make a difference. Get to know iPhone 15.'
    },
    {
        name:'firefox cycle',
        img:'https://images.unsplash.com/photo-1530263503756-b382295fd927?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        price:1678,
        desc:'The all-new iPhone 15 Pro and iPhone 15. Learn more. Designed to make a difference. Get to know iPhone 15.'
    }
]


async function seedDB() {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log("DB Seeded");
}


module.exports=seedDB;