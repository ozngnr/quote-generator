import React, { useState, createContext } from 'react';
import QuotesContainer from './components/quotesContainer';
import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from "./styles/themes"
import styled, { ThemeProvider } from "styled-components"

export const ThemeModeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

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