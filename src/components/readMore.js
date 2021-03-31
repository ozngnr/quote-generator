import React from "react";
import { Link as RouterLink } from "react-router-dom"
import DoubleArrow from "@material-ui/icons/DoubleArrow";
import styled from "styled-components"

export default function ReadMore({ quote }) {
  const { quoteAuthor, quoteGenre } = quote

  return (
    <Link to={`/quotes-by-${quoteAuthor}`} className="rm-button">
      <Span>
        <AuthorName>{quoteAuthor}</AuthorName>
        <Genre>{quoteGenre}</Genre>
      </Span>
      <DoubleArrow />
    </Link>
  )
};

const Link = styled(RouterLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  width: 100%;
  padding: 3em 2em;
  color: #4f4f4f;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #f2f2f2;
    background: #333333;
  }
`

const Span = styled.span`
  display: block;
`

const AuthorName = styled(Span)`
  font-size: 1.5rem;
  margin-bottom: 0.25em;
`
const Genre = styled(Span)`
  color: #828282;
  font-size: 0.875rem;
`