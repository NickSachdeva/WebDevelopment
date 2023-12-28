const jsonString = `{"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}}`;

const res = JSON.parse(jsonString);

console.log(res.title);

// ------------------------------------------

const req = new XMLHttpRequest();

req.onload = function () {
    console.log('success');
    const res = this.responseText;
    const data = JASON.parse(req);
    console.log(data.products.price); 
}

req.onerror = function () {
    console.log('failed');
    console.log(this);
}

https://fakestoreapi.com/products/1

req.open('GET', 'https://fakestoreapi.com/products/1');

req.send();


