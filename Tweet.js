import React from 'react';
import styles from '../styles/App.module.css';

const Tweet = ({name,tweet,tweets,setTweets}) => {

    const deleteTweet=()=>{
        setTweets(tweets.filter((state) =>state.id !== tweet.id));
    };
    return(
        <div className="tweet">
        <h2 className="tweet-title">{name}</h2>
        <h3 className={styles.Tweet}>{tweet.message}</h3>
        <button >Like</button>
        <button onClick={deleteTweet}>Delete</button>
        </div>
    );
}

export default Tweet;
