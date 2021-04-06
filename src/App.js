import React, { useState, createContext, useEffect } from 'react';
import QuotesContainer from './components/quotesContainer';
import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from "./styles/themes"
import styled, { ThemeProvider } from "styled-components"

export const ThemeModeContext = createContext()

function App() {
  // states
  const [theme, setTheme] = useState("light")
  // functions
  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }
  // useEffects
  useEffect(() => {
    const storedTheme = sessionStorage.getItem('theme')
    storedTheme && setTheme(storedTheme)
  }, [])

  useEffect(() => {
    sessionStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <ThemeModeContext.Provider value={{theme, toggleTheme}}>
          <QuotesContainer toggleTheme={toggleTheme} theme={theme}/>
        </ThemeModeContext.Provider>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;

const StyledApp = styled.div``