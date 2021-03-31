import React from 'react';
import styled from "styled-components";

export default function Footer() {
  return (
    <Container>
      <Text>created by <Link href="https://github.com/ozngnr" target="_blank">ozan guner</Link> - devchallenges.io</Text>
    </Container>
  )
};

const Container = styled.footer`
  justify-self: flex-end;
  bottom: 0;
  padding: 1.5em 0;
`;

const Text = styled.p`
  text-align: center;
  color: #828282;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`