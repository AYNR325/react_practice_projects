import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/Theme";
import Themebtn from './components/Themebtn'
import Card from "./components/Card";

function App() {
  const [themeMode, setthemeMode] = useState("light")
  const darkTheme=()=>{
    setthemeMode("dark")
  }
  const lightTheme=()=>{
    setthemeMode("light")
  }

  //actual change in theme
  useEffect(() => {
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4"></div>
        <Themebtn />
        <div className="w-full max-w-sm mx-auto"></div>
        <Card />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
