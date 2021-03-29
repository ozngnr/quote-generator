import React from 'react';


export default function Quote({randomQuote}) {
  return (
    <>
      <div className="quote-container">
        <p className="quote-text">"{randomQuote.quoteText}"</p>
      </div>
    </>
  )
}