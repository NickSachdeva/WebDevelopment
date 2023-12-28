import React from 'react'
import './Person.css';

const moods = ["😃", "😠", "😦", "🙄", "😕", "🤣"];

const todos = [
    {
        id: 1,
        task:'Buy Fruits'
    },
    {
        id: 2,
        task:'Go to Gym'
    },
    {
        id: 3,
        task:'Buy Groceries'    
    },
    {
        id: 4,
        task:'Watch Web Series'
    }
];

function getMood() {
    return moods[Math.floor(Math.random()*moods.length)];
}

const Person = (props) => {

    const  randomNumber = Math.floor(Math.random() * 10 + 1);
    const magicNum = 7;
    let show = null;
    if(randomNumber === magicNum) {
        show=<img src="https://media4.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b9523jfm7wkrqecrgjbd3a638tyy60y4tl1tu1vl7mpp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"/>
    }else{
        show=<p>Not a magic Number</p>
    }

  return (
        <article className='person'>
            <h2>Name: {props.name}</h2>
            <p>Age: {props.age}</p>
            <p>FavColor: {props.favColor} </p> 

            <div>
                <h3>Random Number: {randomNumber}</h3>
                <h2>My Mood is :{getMood()}</h2>
                <ul>
                    {   todos.map((item)=>{
                            return <li>{item.task}</li>
                        })
                    }
                </ul>
                {/* { show } */}
                {randomNumber===7 ? <img src='https://media4.giphy.com/media/2sXf9PbHcEdE1x059I/giphy.gif?cid=6c09b9523jfm7wkrqecrgjbd3a638tyy60y4tl1tu1vl7mpp&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g' width='350px'/> : <p>This is not a magic number</p>}       
            </div>

        </article>
    )
}

export default Person