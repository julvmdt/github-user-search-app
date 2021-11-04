import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResultCard from "./ResultCard";
import gihub from "../api/github";
import "./App.scss";

const App = () => {
  const [userInfo, setUserInfo] = useState(null);

  const onSearchSubmit = async (term) => {
    const response = await gihub.get(`/users/${term}`);
    if (!response.data) {
      return;
    }
    setUserInfo(response.data);
  };

  return (
    <>
      <div className="app-title-container">
        <h1>devfinder</h1>
        <div className="app-toggle-container">
          <h4 className="h4-bold">DARK</h4>
          <img src={`${process.env.PUBLIC_URL}/icon-moon.svg`} />
        </div>
      </div>
      <SearchBar onSubmit={onSearchSubmit} />
      <ResultCard userInfo={userInfo} />
    </>
  );
};

export default App;
