import React from 'react';
import styled from "styled-components";

export default function Quote({quote}) {
  const { quoteText } = quote

  return (
    <Container style={{ marginBottom: "120px"}}>
      <Text className="quote-text">"{quoteText}"</Text>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 7em;
`

const Text = styled.p`
  position: relative;
  font-size: 2.25em;
  padding: 0 2rem;

  &::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 8px;
    left: -100px;
    background: #f7df94;
  }
`