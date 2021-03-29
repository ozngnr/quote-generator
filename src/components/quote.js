import React from 'react';


export default function Quote({quote}) {
  const { quoteText } = quote

  return (
    <>
      <div style={{ marginBottom: "120px"}}>
        <p className="quote-text">"{quoteText}"</p>
      </div>
    </>
  )
}