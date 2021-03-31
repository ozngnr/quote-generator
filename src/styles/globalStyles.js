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

  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
`