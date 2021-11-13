import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ResultCard from "./ResultCard";
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
  }, [theme]);

  return (
    <>
      <div className="background"></div>
      <div className="app-title-container">
        <h1>devfinder</h1>
        <div className="app-toggle-container">
          <h4 className="h4-bold">
            {(isDark ? "light" : "dark").toUpperCase()}
          </h4>
          <img
            onClick={toggleTheme}
            src={`${process.env.PUBLIC_URL}/icon-${
              isDark ? "sun" : "moon"
            }.svg`}
          />
        </div>
      </div>
      <SearchBar hasResult={hasResult} onSubmit={onSearchSubmit} />
      <ResultCard userInfo={userInfo} />
    </>
  );
};

export default App;
