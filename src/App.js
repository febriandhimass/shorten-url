import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Shorten from './components/Shorten'

function App() {
  const [shortUrl, setShortUrl] = useState("")

  const shorten = searchValue => {
    fetch(`https://ismaelc-bitly.p.rapidapi.com/v3/shorten?longUrl=${searchValue}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "ismaelc-bitly.p.rapidapi.com",
        "x-rapidapi-key": "SIGN-UP-FOR-KEY"
      }
    })
    .then(response => {
      console.log(response);
      setShortUrl(response.data.url)
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <div className="App">
      <Header text="Shorten your url here" />
      <Shorten shorten={shorten} />
      <p className="App-intro">Here it is &nbsp;<a href={shortUrl}>{shortUrl}</a></p>
    </div>
  );
}

export default App;
