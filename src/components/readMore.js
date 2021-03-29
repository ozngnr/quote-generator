import React from "react";
import { Link } from "react-router-dom"
import DoubleArrow from "@material-ui/icons/DoubleArrow";

export default function ReadMore({ randomQuote }) {
  const { quoteAuthor, quoteGenre } = randomQuote

  return (
    <Link to={`/quotes-by-${quoteAuthor}`} className="rm-button">
      <span>
        <span className="rm-text_author">{quoteAuthor}</span>
        <span className="rm-text_genre">{quoteGenre}</span>
      </span>
      <DoubleArrow />
    </Link>
  )
};