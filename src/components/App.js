import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ResultCard from "./ResultCard";
import gihub from "../api/github";
import "./App.scss";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const onSearchSubmit = async (term) => {
    const response = await gihub.get(`/users/${term}`);
    if (!response.data) {
      return;
    }
    setUserInfo(response.data);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <>
      <div class="background"></div>
      <div className="app-title-container">
        <h1>devfinder</h1>
        <div className="app-toggle-container">
          <h4 className="h4-bold">
            {(theme === "dark" ? "light" : "dark").toUpperCase()}
          </h4>
          <img
            onClick={toggleTheme}
            src={`${process.env.PUBLIC_URL}/icon-moon.svg`}
          />
        </div>
      </div>
      <SearchBar onSubmit={onSearchSubmit} />
      <ResultCard userInfo={userInfo} />
    </>
  );
};

export default App;
