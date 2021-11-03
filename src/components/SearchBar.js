import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <form className="search-input" onSubmit={() => console.log("submit")}>
      <img src={`${process.env.PUBLIC_URL}/icon-search.svg`} />
      <input placeholder="Search GitHub username..." />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
