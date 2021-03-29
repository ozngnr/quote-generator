import React from 'react';

export default function ReadMore({ children, randomQuote, onClick}) {
  return (
    <div className="rm-container" onClick={onClick}>
      <div className="rm-text">
        <h2 className="rm-text_author">{randomQuote.quoteAuthor}</h2>
        <p className="rm-text_genre">{randomQuote.quoteGenre}</p>
      </div>
      {children}
    </div>
  )
};
