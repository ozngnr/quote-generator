import React, { useState, useEffect } from 'react';
import Quote from './quote';

export default function QuotesContainer() {
  //States
  const [randomQuote, setRandomQuote] = useState({})
  const [error, setError] = useState("")

  //useEffects
  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then(res => res.json())
      .then(res => setRandomQuote(...res.data))
      .catch(err => setError(err))
  }, [])

  console.log(error)

  return (
    <section>
      <Quote randomQuote={randomQuote} />
    </section>
  )
}

// https://quote-garden.herokuapp.com/api/v3/quotes?author=bill%20gates&limit=10