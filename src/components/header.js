import React from 'react';
import { Link as RouterLink } from "react-router-dom";
import RenewIcon from "@material-ui/icons/Autorenew";
import styled from "styled-components"

export default function Header({ handleRenewQuote }) {
  return (
    <Container>
      <Link to="/" className="random-btn" onClick={handleRenewQuote}>
        random
        <RenewIcon style={{marginLeft: "10px"}}/>
      </Link>
    </Container>
  )
};

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 2em 3em;
`

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.125rem;
  color: #333333;
  cursor: pointer;
`