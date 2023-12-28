const express = require('express');
const app = express();
const axios = require('axios');

// https://fakestoreapi.com/products

const FAKE_STORE_BASE_URL = 'https://fakestoreapi.com';

// https://fakestoreapi.com/carts/user/2

app.get('/fake-user-cart/:id', async(req,res) => {
    const { id } = req.params;
    const userProfile = await axios.get(`${FAKE_STORE_BASE_URL}/user/${id}`);
    const userCart = await axios.get(`${ FAKE_STORE_BASE_URL}/carts/user/${id}`);
    
    if(Response.status !==200) {
        return res.send('Something went wrong');
    }

    const response = {
        user: userProfile.data,
        cart: userCart.data
    }

    res.send(response);
});

app.listen(3000,()=>{
    console.log('server started at port 3000');
});