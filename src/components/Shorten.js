import React, { useState } from 'react'

const Shorten = (props) => {
  const [shortenValue, setShortenValue] = useState("")

  const handleShortenInputChanges = (e) => {
    setShortenValue(e.target.value)
  }

  const callShortenFunction = (e) => {
    e.preventDefault()
    props.shorten(shortenValue)
  }

  return (
    <form className="shorten">
      <input value={shortenValue} onChange={handleShortenInputChanges} type="text" />
      <input onClick={callShortenFunction} type="submit" value="Shorten" />
    </form>
  )
}

export default Shorten;