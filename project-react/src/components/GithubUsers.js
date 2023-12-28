import React, { useEffect, useState } from 'react'
import styles from "./GithubUsers.module.css";

const GithubUsers = (props) => {

    const [ user, setUser ] = useState({
        imgUrl: "#",
        followers: 0,
        following: 0
    });

    useEffect(() => {
        // API
        async function getUser(username) {
            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();
            // console.log(data);

            const { avatar_url, followers, following } = data;

            setUser(() => {
                return { imgUrl: avatar_url, followers: followers, following: following };
            })
        }
        getUser(props.username);
    }, []);


    return (
        <figure className={styles.user}>
            <img src={user.imgUrl} alt="profile-picture" />
            <figcaption>
                <p>Username:  {props.username}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
            </figcaption>
        </figure>
    )
}

export default GithubUsers