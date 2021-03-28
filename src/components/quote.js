import React from 'react';
import ArrowRight from "@material-ui/icons/DoubleArrow"

export default function Quote({randomQuote}) {
  return (
    <>
      <div className="quote-container">
        <p className="quote-text">"{randomQuote.quoteText}"</p>
        <button className="read-more-button">
          {randomQuote.quoteAuthor} 
          <span className="quote-text_genre">{randomQuote.quoteGenre}</span>
          <ArrowRight />
        </button>
      </div>
    </>
  )
}