import React from "react";
import SearchBar from "./SearchBar";
import ResultCard from "./ResultCard";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className="app-title-container">
        <h1>devfinder</h1>
        <div className="app-toggle-container">
          <h4 className="h4-bold">DARK</h4>
          <img src={`${process.env.PUBLIC_URL}/icon-moon.svg`} />
        </div>
      </div>
      <SearchBar />
      <ResultCard />
    </>
  );
};

export default App;
