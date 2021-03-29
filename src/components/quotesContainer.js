import React, { useState, useEffect } from 'react';
import {Switch, Route} from "react-router-dom"
import Quote from './quote';
import ReadMore from './readMore';
import Header from './header';
import Footer from './footer';
 
export default function QuotesContainer() {
  //States
  const [randomQuote, setRandomQuote] = useState({})
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [author, setAuthor] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  
  // Functions



  //useEffects
  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then(res => res.json())
      .then(res => setRandomQuote(...res.data))
      .catch(err => setError(err))
  }, [setIsLoading])

  useEffect(() => {
    setAuthor(randomQuote.quoteAuthor)
    author &&
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}&limit=5`)
      .then(res => res.json())
      .then(res => setAuthorQuotes(res.data))
      .catch(err => setError(err))
  }, [author, randomQuote])
  
  
  console.log(authorQuotes)
  console.log(error)

  return (
    <div className="site-wrapper">
      <Header />
      {
      // isLoading ? <h1>Loading...</h1> :
      <Switch>
        <Route exact path="/">
          <section>
            <Quote quote={randomQuote} />
            <ReadMore randomQuote={randomQuote} />
          </section>
        </Route>
        <Route exact path={`/quotes-by-${author}`}>
          <section>
            <h1 className="section-title">{author}</h1>
            {authorQuotes.map(quote => <Quote key={quote._id} quote={quote}/>)}
          </section>
        </Route>
      </Switch>}
      <Footer />
    </div>
  )
}
