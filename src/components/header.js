import React, { useContext } from 'react';
import { Link as RouterLink } from "react-router-dom";
import RenewIcon from "@material-ui/icons/Autorenew";
import styled from "styled-components"
import { ThemeModeContext } from "../App"
import { Toggle } from '.';

export default function Header({ handleRenewQuote }) {
  const {theme, toggleTheme} = useContext(ThemeModeContext)

  return (
    <Container>
      <Toggle theme={theme} toggleTheme={toggleTheme}/>
      <Link to="/" className="random-btn" onClick={handleRenewQuote}>
        random
        <RenewIcon style={{marginLeft: "10px"}}/>
      </Link>
    </Container>
  )
};

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em 3em;
`

const Link = styled(RouterLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 1.125rem;
  color: ${({theme}) => theme.text};
  cursor: pointer;
`