import React, { useState, useEffect } from 'react';
import Quote from './quote';

//Icons
import ArrowRight from "@material-ui/icons/DoubleArrow"
import ReadMore from './readMore';

export default function QuotesContainer() {
  //States
  const [randomQuote, setRandomQuote] = useState({})
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [author, setAuthor] = useState("")
  const [error, setError] = useState("")
  
  // Functions



  //useEffects
  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then(res => res.json())
      .then(res => setRandomQuote(...res.data))
      .catch(err => setError(err))
  }, [])

  useEffect(() => {
    setAuthor(randomQuote.quoteAuthor)
    author &&
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=5`)
      .then(res => res.json())
      .then(res => setAuthorQuotes(res.data))
      .catch(err => setError(err))
  }, [author, randomQuote])
  
  console.log(authorQuotes)



  return (
    <section>
      <div class="quote-container">
        <Quote randomQuote={randomQuote}/>
        <ReadMore randomQuote={randomQuote}>
          <ArrowRight />
        </ReadMore>
      </div>
    </section>
  )
}

// https://quote-garden.herokuapp.com/api/v3/quotes?author=bill%20gates&limit=10