import ResponsiveNav from './components/ResponsiveNav';
import HomeBanner from './components/HomeBanner';
import './App.css';
import React, { useState, useEffect } from 'react';

export const DarkModeContext = React.createContext(null);

function App() {

  const [darkTheme, setDarkTheme] = useState(false);
    // Check if prefers dark mode in browser
    useEffect(() => {
        const darkMode = window.matchMedia('(prefers-color-scheme: dark').matches;
        if (darkMode) {
            setDarkTheme(true);
            document.body.classList.toggle('dark-theme');
        }
    }, []);

  return (<>
          <DarkModeContext.Provider value={{darkTheme: darkTheme, setDarkTheme: setDarkTheme}}>
          <ResponsiveNav/>
          <HomeBanner />
          </DarkModeContext.Provider>
      </>
  );
}

export default App;
