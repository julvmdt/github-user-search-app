import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import ResultCard from "./ResultCard/ResultCard";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import gihub from "../api/github";
import "./App.scss";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [theme, setTheme] = useState("light");
  const [hasResult, setHasResult] = useState(null);

  const isDark = theme === "dark";
  const isLight = theme === "light";

  const toggleTheme = () => {
    if (isLight) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const onSearchSubmit = async (term) => {
    try {
      const response = await gihub.get(`/users/${term}`);
      setHasResult(true);
      setUserInfo(response.data);
    } catch (e) {
      setHasResult(false);
      setUserInfo(null);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    document.body.classList.toggle("light", isLight);
  }, [theme, isDark, isLight]);

  return (
    <>
      <div className="background"></div>
      <div className="app-title-container">
        <h1>devfinder</h1>
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      </div>
      <SearchBar hasResult={hasResult} onSubmit={onSearchSubmit} />
      <ResultCard userInfo={userInfo} />
    </>
  );
};

export default App;
