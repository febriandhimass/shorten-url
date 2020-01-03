import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import Shorten from './components/Shorten'
import Shortener from "@studiohyperdrive/shortener"

const shortener = new Shortener({
  target: "https://febrian.shorten",
  length: 8,
  alphabet: "alphanumeric"
})
function App() {
  const [shortUrl, setShortUrl] = useState({})

  const shorten = searchValue => {
    const result = shortener.shorten(searchValue)
    setShortUrl(result)
  }

  return (
    <div className="App">
      <Header text="Shorten your url here" />
      <Shorten shorten={shorten} />
      <p className="App-intro">Here it is &nbsp;<a href={shortUrl.original} target="_blank" rel="noopener noreferrer">{shortUrl.target}</a></p>
    </div>
  );
}

export default App;
