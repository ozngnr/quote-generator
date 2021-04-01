import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from "react-router-dom";
import styled, { ThemeContext } from 'styled-components';
import { BarsSpinner } from "react-spinners-kit";

import { Header, Footer, Quote, ReadMore } from "../components"
 
export default function QuotesContainer({theme, toggleTheme}) {
  const { accent } = useContext(ThemeContext) // get accent color for BarsSpinner

  //States
  const [quote, setQuote] = useState({})
  const [authorQuotes, setAuthorQuotes] = useState([])
  const [fetchCount, setFetchCount] = useState(0)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  
  // Functions
  function handleRenewQuote() {
    setIsLoading(true)
    setFetchCount(prevCount => prevCount + 1)
  }

  //useEffects
  useEffect(() => {
    fetch("https://quote-garden.herokuapp.com/api/v3/quotes/random")
      .then(res => res.json())
      .then(res => {
        setQuote(...res.data)
        setIsLoading(false)
      })
      .catch(err => setError(err))
  }, [fetchCount])

  useEffect(() => {
    fetch(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${quote.quoteAuthor}&limit=5`)
      .then(res => res.json())
      .then(res => {
        setAuthorQuotes(res.data)
      })
      .catch(err => setError(err))
  }, [quote])

  return (
    <Wrapper>
      <Header handleRenewQuote={handleRenewQuote}/>
      {
      isLoading ? <Section><BarsSpinner size={100} color={accent} /></Section> :
      error ? <Section><Error>Seems like we can't get a quote at the moment. Please try again later.</Error></Section> :

      <Switch>
        <Route exact path="/">
          <Section>
            <Quote quote={quote} />
            <ReadMore quote={quote} />
          </Section>
        </Route>
        <Route exact path={`/quotes-by-${quote.quoteAuthor}`}>
          <Section>
            <Title>{quote.quoteAuthor}</Title>
            {authorQuotes.map(quote => <Quote key={quote._id} quote={quote}/>)}
          </Section>
        </Route>
      </Switch>

      }
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  max-width: 675px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  color: ${({theme}) => theme.text};
  margin-bottom: 3.875em;
  padding: 0 1em;
`

const Error = styled.h1``