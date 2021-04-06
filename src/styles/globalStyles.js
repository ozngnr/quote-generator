import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: "Raleway", sans-serif;
  }

  body {
    background: ${({theme}) => theme.body};
    color: ${({theme}) => theme.text};
    -webkit-transition: background .3s ease-in-out;
    -moz-transition:    background .3s ease-in-out;
    -ms-transition:     background .3s ease-in-out;
    -o-transition:      background .3s ease-in-out;
    transition:         background .3s ease-in-out;
  }

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
`