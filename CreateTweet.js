import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from '../styles/App.module.css';

const CreateTweet = ({setTextInput,setTweets,tweets,textInput}) => {

    const userInput =(e)=> {
        setTextInput(e.target.value);
    };
    const submitTweet=(e)=>{
        e.preventDefault();
        setTweets([...tweets,{message:textInput,id:uuidv4() }]);
        setTextInput('');
    };
    return(
        <form className={styles.moveForm} onSubmit={submitTweet}>
        <textarea value={textInput} onChange={userInput} name="" id="" cols="50" rows="5"></textarea>
        <button className={styles.movebutton}>submit</button>
        </form>
    );
};

export default CreateTweet;
