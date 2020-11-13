import React,{useState,useEffect} from 'react';
import CreateTweet from './components/CreateTweet';
import TweetList from './components/TweetList';
import styles from './styles/App.module.css';


function App() {

  const name= 'Jeremy Rivera';
  const [textInput,setTextInput]=useState('');
  const [tweets,setTweets]=useState([]);

  useEffect(()=>{
    console.log('run')
    },[textInput]);
    
  return (
      <div>
        <h1 className={styles.title}>Twitter lite</h1>
        <CreateTweet textInput={textInput} setTextInput={setTextInput} tweets={tweets} setTweets={setTweets}/>
        <TweetList name={name} tweets={tweets} setTweets={setTweets} />
       
      </div>
  );
}

export default App;