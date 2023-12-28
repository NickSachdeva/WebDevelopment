// fetch('https://fakestoreapi.com/products/1')
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         console.log(data.title);
//     })
//     .catch((err)=>{
//         console.log(err);
//         console.log('something went wrong');
//     });

async function getData() {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const data = await res.json();
    console.log(data.title);
}

getData();

// https://api.tvmaze.com/search/shows?q=girls