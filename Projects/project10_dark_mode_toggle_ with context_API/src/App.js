import "./App.css";
import Header from "./components/header/Header.component";
import Hero from "./components/hero/Hero.component";
import Footer from "./components/footer/Footer.component";
import useLocalStorage from "use-local-storage";
import React, { useState, useEffect } from "react";
import ThemeContext from "./themeContext.js";

//1. Create the context in a seperate file
//2. Provide the context to the component
//3.Use the context

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
  };

  useEffect(() => {
    if (theme === "dark") {
      setSwitchBtn(true);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, switchBtn, toggleTheme }}>
      <div className="main">
        <Header />
        <Hero />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
