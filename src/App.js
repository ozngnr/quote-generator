import React, {useState, useContext, createContext} from 'react';
import './App.css';
import QuotesContainer from './components/quotesContainer';
import { GlobalStyles } from './styles/globalStyles';
import { lightTheme, darkTheme } from "./styles/themes"

export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState("light")

  function themeToggler() {
    (theme === "light") ? setTheme("dark") : setTheme("light")
  }

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeContext.Provider value={theme === "light" ? lightTheme : darkTheme, {themeToggler}}>
        <QuotesContainer />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
