const mongoose = require('mongoose');

// connecting with myapp database
mongoose.connect('mongodb://127.0.0.1:27017/myapp')
.then(()=>{
    console.log('connection open');
})
.catch((err)=>{
    console.log('something went wrong');
    console.log(err);
});

// maps the document coming from mongodb database into usable js
// const movieSchema = new mongoose.Schema({
//     name: String,
//     year: Number,
//     rating: Number
// });

const movieSchema2 = new mongoose.Schema({
    name: {
        type: String,
        required:true,
        maxLength:30
    },
    year: {
        type:Number,
        min:[1995,'Year should not be less than 1995'],
        max:2024
    },
    rating: {
        type:Number,
        min:0,
        max:10
    },
    isWatched:{
        type: Boolean,
        default:false
    },
    date:{
        type:Date,
        default:Date.now
    }
});

const Movie = mongoose.model('Movie',movieSchema2);


// const ironman = new Movie({name:'Ironman',year:2000,rating:10});

// const AnimalMovie = new Movie({name:'Animal',year:2008,rating:7,isWatched:true});

// AnimalMovie.save()
//     .then((m)=>{
        
//         console.log(m);
//         console.log('saved successfully');
//     })
//     .catch((e)=>{
//     console.log("Something went wrong");
//     console.log(e);
//     });

// const Dummy_Movies = [
//     {
//         name:'ramleela',
//         year:2012,
//         rating:7.2
//     },
//     {
//         name:'Robot',
//         year:2012,
//         rating:6.4
//     },
//     {
//         name:'Dabang',
//         year:2013,
//         rating:6.0
//     },
//     {
//         name:'tees maar kha',
//         year:2015,
//         rating:5.8
//     },
//     {
//         name:'Project X',
//         year:2008,
//         rating:9.8
//     }
// ];

// Movie.insertMany(Dummy_Movies)
//     .then((movies)=>{
//         console.log(movies);
//     })
//     .catch((e)=>{
//         console.log(e);
//     });


// Movie.create({name:'ramleela2',year:2016,rating:7.8})
// .then((m)=>{
//     console.log(m);
//     console.log('Saved!!');

// });

// checking 'year' validation
Movie.create({name:'BhagamBhag',year:1998,rating:8.6,isWatched:false})
    .then((m)=>{
        console.log(m);
    })
    .catch((err)=>{
        console.log(err);
    });

// Movie.findOne({year:2012})
//     .then((m)=>{
//         console.log(m);
//     })
//     .catch((e)=>{
//         console.log("something went wtong");
//         console.log(e);
//     });

// Movie.updateOne({name:'Project X'},{rating:10.0})
//     .then((m)=>{
//         console.log(m);
//     })
//     .catch((e)=>{
//         console.log("Something went wrong");
//         console.log(e);
//     });





